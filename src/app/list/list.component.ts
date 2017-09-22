import {Component, OnInit} from '@angular/core';
import {DocumentsService} from '../shared/documents.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Document} from '../shared/document';
import {DocumentTypesService} from '../shared/document-types.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  currentDocument: Document;
  private documentsInCategory: Document[];
  private currentIndex = 0;
  private categoryId: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private documentsService: DocumentsService,
              private documentTypesService: DocumentTypesService) {
  }

  public get categoryName(): string {
    if (!this.currentDocument) {
      return;
    }
    const category = this.documentTypesService
      .getCategory(this.currentDocument.category);
    return category.name;
  }

  ngOnInit() {
    this.refreshRouteParameters(this.route.snapshot.params);
    console.log(this.categoryId);
    this.documentsInCategory = this.documentsService
      .getAllDocuments()
      .filter(d => d.category === this.categoryId);
    this.refreshDocument();
  }

  hasDocuments() {
    return this.documentsInCategory && this.documentsInCategory.length > 0;
  }

  swipe(action) {
    console.log('swipe it baby!' + action + this.currentIndex);
    const actions = [
      {swipe: 'up', action: () => this.navigateBack()},
      {swipe: 'down', action: () => this.undoCategorization()},
      {swipe: 'left', action: () => this.previousDocument()},
      {swipe: 'right', action: () => this.nextDocument()},
    ];

    const [found] = actions
      .filter(a => 'swipe' + a.swipe === action)
      .map(a => a.action);
    if (found) {
      found();
    }
  }

  previousDocument() {
    if (this.currentIndex <= 0) {
      return;
    }
    this.currentIndex--;
    this.refreshDocument();
  }

  nextDocument() {
    if (this.currentIndex >= this.documentsInCategory.length - 1) {
      return;
    }
    this.currentIndex++;
    this.refreshDocument();
  }

  undoCategorization() {
    if (this.currentDocument) {
      this.currentDocument.type = undefined;
      this.currentDocument.category = undefined;
    }
    this.router.navigate(['/dashboard']);
  }

  private refreshRouteParameters(params: any) {
    this.categoryId = params.category;
  }

  private refreshDocument() {
    this.currentDocument = this.documentsInCategory[this.currentIndex];
  }

  private navigateBack() {
    this.router.navigate(['/dashboard']);
  }
}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {DocumentTypesService} from '../shared/document-types.service';
import {Category} from '../shared/category';
import {Document} from '../shared/document';
import {DocumentsService} from '../shared/documents.service';

@Component({
  selector: 'app-categorize',
  templateUrl: './categorize.component.html',
  styleUrls: ['./categorize.component.css'],
})
export class CategorizeComponent implements OnInit {
  allDocumentTypes: string[];
  category: Category;

  private categoryId: string;
  private documentId: number;
  private document: Document;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private documentTypesService: DocumentTypesService,
              private documentsService: DocumentsService) {
  }

  private _selectedDocumentType: string;

  public set selectedDocumentType(value: string) {
    this._selectedDocumentType = value;
    this.document.category = this.category.id;
    this.document.type = this._selectedDocumentType;
    this.router.navigate(['/dashboard']);
  }

  ngOnInit() {
    this.refreshRouterParameters(this.route.snapshot.params);
    this.category = this.documentTypesService.getCategory(this.categoryId);
    this.allDocumentTypes = this.category.availableTypes.map(t => t.name);
    this.document = this.documentsService.getDocument(this.documentId);
    console.log(this.document);
  }

  private refreshRouterParameters(params: Params) {
    this.categoryId = params.category;
    this.documentId = parseInt(params.document);
  }
}

import {Component, OnInit} from '@angular/core';
import {DocumentsService} from '../shared/documents.service';
import {ActivatedRoute} from '@angular/router';
import {Document} from '../shared/document';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {

  currentDocument: Document;

  private documents: Document[];
  private currentIndex = 0;

  constructor(private route: ActivatedRoute, private service: DocumentsService) {
  }

  ngOnInit() {
    this.refreshRouteParameters(this.route.snapshot.params);
    this.documents = this.service.getAllDocuments();
    this.refreshDocument();
  }

  previousDocument() {
    if (this.currentIndex <= 0) {
      return;
    }
    this.currentIndex--;
    this.refreshDocument();
  }

  nextDocument() {
    if (this.currentIndex >= this.documents.length) {
      return;
    }
    this.currentIndex++;
    this.refreshDocument();
  }

  private refreshRouteParameters(params: any) {
    this.currentIndex = params.index || 0;
  }

  private refreshDocument() {
    this.currentDocument = this.documents[this.currentIndex];
  }
}

import {Injectable} from '@angular/core';
import {Document} from './document';

@Injectable()
export class DocumentsService {

  private documents = [
    new Document(6, 'invoice6.jpg'),
    new Document(7, 'invoice7.jpg'),
    new Document(8, 'invoice8.jpg'),
    new Document(9, 'invoice9.png'),
    new Document(10, 'invoice10.png'),
    new Document(11, 'invoice11.png'),
  ];

  constructor() {
  }

  getAllDocuments(): Document[] {
    // return [];
    return this.documents;
  }

  getDocument(documentId: number) {
    return this
      .getAllDocuments()
      .filter(d => d.id === documentId)[0];
  }
}

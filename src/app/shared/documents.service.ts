import {Injectable} from '@angular/core';
import {Document} from './document';

@Injectable()
export class DocumentsService {

  private documents = [
    new Document(1, 'invoice1.png'),
    new Document(2, 'invoice2.png'),
    new Document(3, 'invoice3.jpg'),
    new Document(4, 'invoice4.jpg'),
    new Document(5, 'invoice5.png'),
    new Document(6, 'invoice6.jpg'),
    new Document(7, 'invoice7.jpg'),
    new Document(8, 'invoice8.jpg')
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

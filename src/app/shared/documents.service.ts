import {Injectable} from '@angular/core';
import {Document} from './document';

@Injectable()
export class DocumentsService {

  private documents = [
    new Document('invoice1.png'),
    new Document('invoice2.png'),
    new Document('invoice3.jpg'),
    new Document('invoice4.jpg'),
    new Document('invoice5.png'),
  ];

  constructor() {
  }

  getAllDocuments() {
    return this.documents;
  }
}

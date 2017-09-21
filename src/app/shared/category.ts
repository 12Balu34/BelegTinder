import {DocumentType} from './document-type';

export class Category {
  constructor (readonly name: string, readonly id: string, readonly availableTypes: DocumentType[]) {
  }
}

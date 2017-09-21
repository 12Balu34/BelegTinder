import {Injectable} from "@angular/core";
import {Category} from './category';
import {DocumentType} from './document-type';

@Injectable()
export class DocumentTypesService {

  constructor() {
  }

  getCategory(id: string) {
    const [found] = this
      .getAllCategories()
      .filter(c => c.id === id);
    return found
  }

  private categories: Category[] = [
    new Category("Rechnungseingang","incoming_invoice",
      [
        new DocumentType("Hauptsitz"),
        new DocumentType("Filiale 1"),
        new DocumentType("Filiale 2"),
      ]
    ),

    new Category("Rechnungsausgang", "outgoing_invoice",
      [
        new DocumentType("Hauptsitz"),
      ],
    ),

    new Category("Kasse","cash_register",
      [
        new DocumentType("Hauptsitz"),
      ],
    ),

    new Category("Sonstige","other",[
        new DocumentType("Hauptsitz"),
      ],
    ),
  ];

  getAllCategories() {
    return this.categories
  }

}

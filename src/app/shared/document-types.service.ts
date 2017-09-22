import {Injectable} from "@angular/core";
import {Category} from './category';
import {DocumentType} from './document-type';

@Injectable()
export class DocumentTypesService {

  constructor() {
  }

  private nothing = new DocumentType("Keine Auswahl");

  getCategory(id: string) {
    const [found] = this
      .getAllCategories()
      .filter(c => c.id === id);
    return found
  }

  private categories: Category[] = [
    new Category("Rechnungseingang","incoming_invoice",
      [
        this.nothing,
        new DocumentType("Hauptsitz"),
        new DocumentType("Filiale 1"),
        new DocumentType("Filiale 2"),
      ]
    ),

    new Category("Rechnungsausgang", "outgoing_invoice",
      [
        this.nothing,
        new DocumentType("Hauptsitz"),
      ],
    ),

    new Category("Kasse","cash_register",
      [
        this.nothing,
        new DocumentType("Hauptsitz"),
      ],
    ),

    new Category("Sonstige","other",[
      this.nothing,
      new DocumentType("Hauptsitz"),
      ],
    ),
  ];

  getAllCategories() {
    return this.categories
  }

}

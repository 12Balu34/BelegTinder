import {Injectable} from "@angular/core";

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

  getAllCategories() {
    return [
      {
        name: "Rechnungseingang",
        id: "incoming_invoice",
        availableTypes: [
          {name: "Hauptsitz"},
          {name: "Filiale 1"},
          {name: "Filiale 2"},
        ],
      },

      {
        name: "Rechnungsausgang",
        id: "outgoing_invoice",
        availableTypes: [
          {name: "Hauptsitz"},
        ],
      },

      {
        name: "Kasse",
        id: "cash_register",
        availableTypes: [
          {name: "Hauptsitz"},
        ],
      },

      {
        name: "Sonstige",
        id: "other",
        availableTypes: [
          {name: "Hauptsitz"},
        ],
      },
    ]
  }

}

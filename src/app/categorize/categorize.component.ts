import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {DocumentTypesService} from "../shared/document-types.service";
import {Category} from '../shared/category';

@Component({
  selector: "app-categorize",
  templateUrl: "./categorize.component.html",
  styleUrls: ["./categorize.component.css"],
})
export class CategorizeComponent implements OnInit {
  id: string;
  selectedDocumentType: string;
  allDocumentTypes: string[];
  category: Category;

  constructor(private route: ActivatedRoute, private service: DocumentTypesService) {
  }

  ngOnInit() {
    this.refreshRouterParameters(this.route.snapshot.params);
    this.category = this.service.getCategory(this.id);
    this.allDocumentTypes = this.category.availableTypes.map(t => t.name);
  }

  private refreshRouterParameters(params: Params) {
    this.id = params.id;
  }
}

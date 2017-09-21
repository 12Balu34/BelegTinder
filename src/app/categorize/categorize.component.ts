import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {DocumentTypesService} from "../shared/document-types.service";

@Component({
  selector: "app-categorize",
  templateUrl: "./categorize.component.html",
  styleUrls: ["./categorize.component.css"],
})
export class CategorizeComponent implements OnInit {
  id: string;
  selectedDocumentType: string;
  allDocumentTypes: string[];
  category: { name: string; id: string; availableTypes: { name: string }[] };

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

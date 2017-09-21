import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {DocumentTypesService} from "../shared/document-types.service";

@Component({
  selector: "app-categorize",
  templateUrl: "./categorize.component.html",
  styleUrls: ["./categorize.component.css"],
})
export class CategorizeComponent implements OnInit {
  type: string;
  selectedDocumentType: string;
  allDocumentTypes: string[];

  constructor(private route: ActivatedRoute, private service: DocumentTypesService) {
  }

  ngOnInit() {
    this.refreshRouterParameters(this.route.snapshot.params);
    const category = this.service.getCategory(this.type);
    this.allDocumentTypes = category.availableTypes.map(t => t.name);
  }

  private refreshRouterParameters(params: Params) {
    this.type = params.type;
  }
}

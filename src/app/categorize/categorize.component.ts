import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: "app-categorize",
  templateUrl: "./categorize.component.html",
  styleUrls: ["./categorize.component.css"],
})
export class CategorizeComponent implements OnInit {
  type: string;
  documentType: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.refreshRouterParameters(this.route.snapshot.params);
  }

  private refreshRouterParameters(params: Params) {
    this.type = params.type;
  }
}

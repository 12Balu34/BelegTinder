import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CategorizeComponent} from "./categorize/categorize.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ListComponent} from "./list/list.component";

const routes: Routes = [
  {path: "", redirectTo: "dashboard", pathMatch: "full"},
  {path: "dashboard", component: DashboardComponent},
  {path: "list", component: ListComponent},
  {path: "list/:category", component: ListComponent},
  {path: "categorize/:category/:document", component: CategorizeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

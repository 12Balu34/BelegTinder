import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {CategorizeComponent} from "./categorize/categorize.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {FormsModule} from "@angular/forms";
import {DocumentTypesService} from "./shared/document-types.service";
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    CategorizeComponent,
    DashboardComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [DocumentTypesService],
  bootstrap: [AppComponent],
})
export class AppModule {
}

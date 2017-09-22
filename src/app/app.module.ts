import {BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CategorizeComponent} from './categorize/categorize.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FormsModule} from '@angular/forms';
import {DocumentTypesService} from './shared/document-types.service';
import {ListComponent} from './list/list.component';
import {DocumentsService} from './shared/documents.service';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    // override hammerjs default configuration
    'pan': {threshold: 5},
    'swipe': {
      velocity: 0.4,
      threshold: 20,
      direction: 31 // /!\ ugly hack to allow swipe in all direction
    },
  };
}

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
  providers: [
    DocumentTypesService,
    DocumentsService,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}

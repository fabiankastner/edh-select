import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EdhSelectComponent } from './edh-select/edh-select.component';
import { EdhListComponent } from './edh-list/edh-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EdhSelectComponent,
    EdhListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

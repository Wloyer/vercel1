import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesUnComponent } from './pages-un/pages-un.component';
import { PagesDeuxComponent } from './pages-deux/pages-deux.component';
import { PagesTroisComponent } from './pages-trois/pages-trois.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesUnComponent,
    PagesDeuxComponent,
    PagesTroisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

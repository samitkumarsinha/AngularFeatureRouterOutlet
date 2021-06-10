import { AppRoutingModule } from './app-routing.module';
import { DbModule } from './db/db.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SiteModule } from './site/site.module';
import { App1Component } from './app1/app1.component';
import { App2Component } from './app2/app2.component';


@NgModule({
  declarations: [
    AppComponent,
    App1Component,
    App2Component,
  ],
  imports: [
    BrowserModule,
    SiteModule,
    DbModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

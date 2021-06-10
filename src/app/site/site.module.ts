import { SiteRoutingModule } from './site-routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { PagesComponent } from './pages/pages.component';


@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    MenuComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule
  ]
})
export class SiteModule { }

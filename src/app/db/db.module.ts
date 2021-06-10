import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu/menu.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DbRoutingModule } from './db-routing.module';

@NgModule({
  declarations: [
    MenuComponent,
    Page1Component,
    Page2Component,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DbRoutingModule
  ]
})
export class DbModule { }


import { Page1Component } from './page1/page1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page2Component } from './page2/page2.component';

const dbroutes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent, children: [
      {path: 'page1', component: Page1Component },
      {path: 'page2', component: Page2Component}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(dbroutes)],
  exports: [RouterModule]
})
export class DbRoutingModule { }

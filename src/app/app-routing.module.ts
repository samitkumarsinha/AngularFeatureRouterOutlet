import { App2Component } from './app2/app2.component';
import { App1Component } from './app1/app1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const approutes: Routes = [
  { path: 'site', loadChildren: () => import('./site/site.module').then( m => m.SiteModule) },
  { path: 'dashboard', loadChildren: () => import('./db/db.module').then( m => m.DbModule) },
  { path: 'app1' , component: App1Component},
  { path: 'app2' , component: App2Component},
  { path: '' , redirectTo: 'app1', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



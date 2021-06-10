import { PagesComponent } from './pages/pages.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const siteroutes: Routes = [
  {path: 'site', component: PagesComponent, children : [
    {path: 'home', component: HomeComponent},
    {path: 'contact', component: ContactComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(siteroutes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSearchPageComponent } from './home-search-page/home-search-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SupportSearchPageComponent } from './support-search-page/support-search-page.component';

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'home-search',component:HomeSearchPageComponent},
  {path:'support-search',component:SupportSearchPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

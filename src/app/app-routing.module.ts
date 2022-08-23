import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ContributePageComponent } from './contribute-page/contribute-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SearchPageComponent } from './search/search-page/search-page.component';
import { HomeSearchComponent } from './search/home-search-page/home-search-page.component';
import { RecommendComponent } from './recommend/recommend.component';
import { OfferComponent } from './offer/offer.component';

import { ServicesSearchComponent } from './search/services-search/services-search.component';
import { AuthGuard } from './auth.guard';
import { EditHomeComponent } from './edit-home/edit-home.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  { path: 'search', component: SearchPageComponent,   
  children: [
    { path: 'homes', component: HomeSearchComponent  },
    //{ path: 'services', component: ServicesSearchComponent  },
  ]
  },
  { path: 'contribute', component: ContributePageComponent,
    children: [
      { path: 'offer', component: OfferComponent, canActivate: [AuthGuard]  },
      { path: 'edit', component: EditHomeComponent, canActivate: [AuthGuard]  },
      { path: 'account', component: AccountComponent, canActivate: [AuthGuard]  },
      //{ path: 'recommend', component: RecommendComponent, canActivate: [AuthGuard]  },
  ] 
  }, 
  { path:'', component:LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(public router: Router) {}
 }

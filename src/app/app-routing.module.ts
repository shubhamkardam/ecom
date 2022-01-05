import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './landingpage/core/aboutus/aboutus.component';
import { ContactusComponent } from './landingpage/core/contactus/contactus.component';
import { HomeComponent } from './landingpage/core/home/home.component';
import { CollectionsComponent } from './landingpage/core/marketplace/core/collections/collections.component';
import { MarketplaceComponent } from './landingpage/core/marketplace/marketplace.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path:'landing',component: LandingpageComponent,
    children:[
      { path: 'home', component: HomeComponent},
      { path: 'aboutus', component: AboutusComponent},
      { path: 'contactus', component: ContactusComponent},
      { path: 'market', component: MarketplaceComponent,
        children:[
          { path: 'collection/:name', component: CollectionsComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

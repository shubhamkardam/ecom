import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { MenubarComponent } from './landingpage/common/menubar/menubar.component';
import { SidebarComponent } from './landingpage/common/sidebar/sidebar.component';
import { HomeComponent } from './landingpage/core/home/home.component';
import { AboutusComponent } from './landingpage/core/aboutus/aboutus.component';
import { ContactusComponent } from './landingpage/core/contactus/contactus.component';
import { MarketplaceComponent } from './landingpage/core/marketplace/marketplace.component';
import { CollectionsComponent } from './landingpage/core/marketplace/core/collections/collections.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LandingpageComponent,
    MenubarComponent,
    SidebarComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    MarketplaceComponent,
    CollectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

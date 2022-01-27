import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import { CollectionsItemsComponent } from './landingpage/core/marketplace/core/collections-items/collections-items.component';

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
    CollectionsComponent,
    CollectionsItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    MatMenuModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

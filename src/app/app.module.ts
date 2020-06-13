import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import { HomeComponent } from './home';
import {CartComponent} from "./cart";
import {WishlistComponent} from "./wishlist";
import {SignupComponent} from "./signup";
import {LoginComponent} from "./login";
import {ShopComponent} from "./shop";
import {ProfileComponent} from "./profile";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    SignupComponent,
    WishlistComponent,
    LoginComponent,
    ShopComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

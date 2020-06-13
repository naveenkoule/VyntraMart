import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import {CartComponent} from './cart';
import {SignupComponent} from './signup';
import {WishlistComponent} from './wishlist';
import {LoginComponent} from "./login";
import {ShopComponent} from "./shop";
import {ProfileComponent} from "./profile";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'wishlist', component: WishlistComponent},
  { path: 'login', component: LoginComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'profile', component: ProfileComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const appRoutingModule = RouterModule.forRoot(routes);

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about-us/about.component';
import { ContactComponent } from './pages/contact-us/contact.component';
import { CartComponent } from './pages/cart/cart.component';
import { OrderTrackingComponent } from './pages/order/order-tracking.component';
import { CheckoutComponent } from './pages/checkout/checkout.component'; 


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order-tracking', component: OrderTrackingComponent } ,
  { path: 'checkout', component: CheckoutComponent } 
];

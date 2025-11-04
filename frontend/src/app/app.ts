import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { renderHeader } from './components/header/header';
import { renderFooter } from './components/footer/footer';
import { renderHome } from './pages/home/home';
import { renderMenu } from './pages/menu/menu';
import { renderAboutUs } from './pages/about-us/about-us';
import { renderProductList } from './pages/product-list/product-list';
import { renderProductDetails } from './pages/product-details/product-details';
import { renderContactUs } from './pages/contact-us/contact-us';
import { renderOrder } from './pages/order/order';
import { renderCart } from './pages/cart/cart';
import { renderCheckout } from './pages/checkout/checkout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  protected readonly title = signal('frontend');

  ngOnInit(): void {
    this.init();
  }

  private router(): void {
    const view = document.getElementById('router-view');
    if (!view) return;

    const path = window.location.hash.replace('#', '') || 'home';
    switch (path) {
      case 'menu': renderMenu(view); break;
      case 'about': renderAboutUs(view); break;
      case 'products': renderProductList(view); break;
      case 'product-details': renderProductDetails(view); break;
      case 'contact': renderContactUs(view); break;
      case 'order': renderOrder(view); break;
      case 'cart': renderCart(view); break;
      case 'checkout': renderCheckout(view); break;
      default: renderHome(view);
    }
  }

  private init(): void {
    renderHeader(document.getElementById('header'));
    renderFooter(document.getElementById('footer'));
    this.router();
    window.addEventListener('hashchange', () => this.router());
  }
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cartItems: any[] = [];
  cartVisible = false;

  subtotal = 0;
  tax = 0;
  total = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.refreshCart();
  }

  toggleCart() {
    this.cartVisible = !this.cartVisible;
    if (this.cartVisible) this.refreshCart();
  }

  refreshCart() {
    this.cartItems = this.cartService.getCartItems();
    this.subtotal = this.cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
    this.tax = this.subtotal * 0.08;
    this.total = this.subtotal + this.tax;
  }

  removeItem(id: string) {
    this.cartService.removeFromCart(id);
    this.refreshCart();
  }

  onClearCart() {
    this.cartService.clearCart();
    this.refreshCart();
  }
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; // ✅ Needed for *ngIf and *ngFor
import { CartService } from '../../services/cart.service'; // ✅ Adjust path if needed

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule], // ✅ Add CommonModule
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cartItems: any[] = []; // ✅ holds cart items
  cartVisible = false;   // ✅ controls cart panel visibility
  total = 0;             // ✅ total price

  constructor(private cartService: CartService) {}

  ngOnInit() {
    // ✅ initialize cart items
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getTotal();
  }

  toggleCart() {
    this.cartVisible = !this.cartVisible; // ✅ show/hide cart panel
  }

  onClearCart() {
    this.cartService.clearCart(); // ✅ clear cart using service
    this.cartItems = [];
    this.total = 0;
  }

  removeItem(id: string) {
    this.cartService.removeFromCart(id);
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getTotal();
  }
}

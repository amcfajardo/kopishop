import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import this
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true, // ✅ assuming you use standalone components
  imports: [CommonModule], // ✅ add CommonModule to access pipes like 'number'
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  subtotal = 0;
  tax = 0;
  total = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = this.cartService.getCartItems();
    this.updateTotals();
  }

  removeItem(id: number | string) {
    this.cartService.removeFromCart(id);
    this.loadCart();
  }

  updateTotals() {
    this.subtotal = this.cartService.getSubtotal();
    this.tax = this.cartService.getTax();
    this.total = this.cartService.getTotal();
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartItems: any[] = [];
  subtotal = 0;
  tax = 0;
  total = 0;

  customer = {
    fullName: '',
    phone: '',
    email: '',
    pickupTime: '',
    paymentMethod: 'card'
  };

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.updateTotals();
  }

  updateTotals() {
    this.subtotal = this.cartService.getTotal();
    this.tax = this.subtotal * 0.08;
    this.total = this.subtotal + this.tax;
  }

  placeOrder() {
  if (
    !this.customer.fullName ||
    !this.customer.phone ||
    !this.customer.email ||
    !this.customer.pickupTime
  ) {
    alert('⚠️ Please fill in all required fields.');
    return;
  }

  if (this.cartItems.length === 0) {
    alert('🛒 Your cart is empty.');
    return;
  }

  // Build order object
  const order = {
    id: Date.now(),
    orderTime: new Date(),
    status: 'received',
    pickupTime: this.customer.pickupTime,
    paymentMethod: this.customer.paymentMethod,
    total: this.total,
    customerInfo: {
      name: this.customer.fullName,
      phone: this.customer.phone,
      email: this.customer.email
    },
    items: this.cartItems
  };

  // Save order in CartService
  this.cartService.setLastOrder(order);

  // Clear cart for next order
  this.cartService.clearCart();

  // Navigate to tracking page
  this.router.navigate(['/order-tracking']);
}

}

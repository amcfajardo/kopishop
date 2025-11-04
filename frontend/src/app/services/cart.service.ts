import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  constructor() {}

  getCartItems() {
    return this.cartItems;
  }

  addToCart(item: any) {
    const existingItem = this.cartItems.find(i => i._id === item._id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ ...item, quantity: 1 });
    }
  }

  removeFromCart(id: string) {
    this.cartItems = this.cartItems.filter(item => item._id !== id);
  }

  clearCart() {               // ✅ this must exist and be spelled correctly
    this.cartItems = [];
  }

  getTotal() {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}

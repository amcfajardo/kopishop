import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cart: any[] = [];

  getCartItems() {
    return this.cart;
  }

  addToCart(item: any) {
    // normalize id to number or string consistently
    const itemId = item.id ?? item._id ?? null;

    // ensure price is a number
    const price = item.price !== undefined ? parseFloat(item.price) : 0;

    // find existing by normalized id (handles string/number)
    const existing = this.cart.find(i => String(i.id) === String(itemId));

    if (existing) {
      existing.quantity = (existing.quantity || 1) + 1;
    } else {
      const newItem = {
        ...item,
        id: itemId,
        price: price,
        quantity: 1
      };
      this.cart.push(newItem);
    }

    console.log('Cart now:', this.cart);
  }

  removeFromCart(id: number | string) {
    this.cart = this.cart.filter(i => String(i.id) !== String(id));
  }

  getTotal() {
    return this.cart.reduce((sum, item) => sum + (Number(item.price) || 0) * (item.quantity || 1), 0);
  }

  clearCart() {
    this.cart = [];
  }
}

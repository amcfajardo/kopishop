import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cart: any[] = [];
  private lastOrder: any = null;

  getCartItems() {
    return this.cart;
  }

  addToCart(item: any) {
    const itemId = item.id ?? item._id ?? null;
    const price = item.price !== undefined ? parseFloat(item.price) : 0;

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
  const normalizedId = String(id);
  this.cart = this.cart.filter(i => {
    // support both i.id and i._id, and guard undefined
    const itemId = i?.id ?? i?._id ?? '';
    return String(itemId) !== normalizedId;
  });

  console.log('[CartService] Removed id=', normalizedId, ' -> cart now:', this.cart);
}


  updateQuantity(id: number | string, quantity: number) {
    const item = this.cart.find(i => String(i.id) === String(id));
    if (item) {
      item.quantity = Math.max(1, quantity); // prevent 0 or negative
    }
  }

 
  getSubtotal() {
    return this.cart.reduce(
      (sum, item) => sum + (Number(item.price) || 0) * (item.quantity || 1),
      0
    );
  }

  
  getTax() {
    return this.getSubtotal() * 0.08;
  }

 
  getTotal() {
    return this.getSubtotal() + this.getTax();
  }

  clearCart() {
    this.cart = [];
  }

  
  setLastOrder(order: any) {
    this.lastOrder = order;
  }

  getLastOrder() {
    return this.lastOrder;
  }
}

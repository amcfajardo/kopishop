import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {

}

export function renderCart(container: HTMLElement | null) {
  if (!container) return;
  container.innerHTML = `
    <h1>Cart</h1>
    <p>Review the items in your cart.</p>
  `;
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  imports: [],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {

}

export function renderCheckout(container: HTMLElement | null) {
  if (!container) return;
  container.innerHTML = `
    <h1>Checkout</h1>
    <p>Complete your purchase here.</p>
  `;
}

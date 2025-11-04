import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  imports: [],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order {

}

export function renderOrder(container: HTMLElement | null) {
  if (!container) return;
  container.innerHTML = `
    <h1>Order</h1>
    <p>Place your order here.</p>
  `;
}

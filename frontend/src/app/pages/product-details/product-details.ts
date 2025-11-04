import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {

}

export function renderProductDetails(container: HTMLElement | null) {
  if (!container) return;
  container.innerHTML = `
    <h1>Product Details</h1>
    <p>See detailed information about the selected product.</p>
  `;
}

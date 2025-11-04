import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

}

export function renderProductList(container: HTMLElement | null) {
  if (!container) return;
  container.innerHTML = `
    <h1>Product List</h1>
    <p>Browse all available products.</p>
  `;
}

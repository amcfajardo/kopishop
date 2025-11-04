import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
export function renderHeader(container: HTMLElement | null) {
  if (!container) return;
  container.innerHTML = `
    <nav>
      <a href="#home">Home</a>
      <a href="#menu">Menu</a>
      <a href="#about">About Us</a>
      <a href="#products">Products</a>
      <a href="#contact">Contact Us</a>
      <a href="#cart">Cart</a>
      <a href="#checkout">Checkout</a>
    </nav>
    <hr>
  `;
}




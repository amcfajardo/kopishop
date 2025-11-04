import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

}

export function renderMenu(container: HTMLElement | null) {
  if (!container) return;
  container.innerHTML = `
    <h1>Menu</h1>
    <p>Here’s a list of our products.</p>
  `;
}

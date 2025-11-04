import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}

export function renderHome(container: HTMLElement | null) {
  if (!container) return;
  container.innerHTML = `
    <h1>Welcome to Kopishop!</h1>
    <p>Check out our products and enjoy shopping!</p>
  `;
}



import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  imports: [],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs {

}
export function renderAboutUs(container: HTMLElement | null) {
  if (!container) return;
  container.innerHTML = `
    <h1>About Us</h1>
    <p>Learn more about Kopishop.</p>
  `;
}

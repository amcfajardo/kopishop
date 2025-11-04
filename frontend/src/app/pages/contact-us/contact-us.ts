import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  imports: [],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
})
export class ContactUs {

}

export function renderContactUs(container: HTMLElement | null) {
  if (!container) return;
  container.innerHTML = `
    <h1>Contact Us</h1>
    <p>Get in touch with Kopishop.</p>
  `;
}

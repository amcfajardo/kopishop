import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="page order">
      <h1>Your Orders</h1>
      <p>Track your latest KopiToki orders here.</p>
    </section>
  `,
  styles: [`
    .order { text-align: center; margin-top: 2rem; }
  `]
})
export class OrderComponent {}

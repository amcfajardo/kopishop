import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

}
export function renderFooter(container: HTMLElement | null) {
  if (!container) return;
  container.innerHTML = `
    <hr>
    <footer>
      <p>&copy; 2025 Kopishop. All rights reserved.</p>
    </footer>
  `;
}


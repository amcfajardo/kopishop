import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: any[] = [];

  constructor(private api: ApiService, private cartService: CartService) {}

  ngOnInit(): void {
    this.api.getMenu().subscribe({
      next: (data: any[]) => {
        this.menuItems = data;
      },
      error: (err) => {
        console.error('Error loading menu:', err);
      }
    });
  }

  addToCart(item: any) {
  // debug: log the item being clicked
  console.log('Add button clicked — item:', item);

  // push a shallow copy of the item to avoid accidental mutation side-effects
  const itemCopy = { ...item };

  this.cartService.addToCart(itemCopy);
}


  groupByCategory(category: string) {
    return this.menuItems.filter(item => item.category === category);
  }
}
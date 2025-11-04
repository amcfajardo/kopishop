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
    this.cartService.addToCart(item);
  }

  groupByCategory(category: string) {
    return this.menuItems.filter(item => item.category === category);
  }
}


import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; // ✅ Needed for *ngIf and *ngFor
import { CartService } from '../../services/cart.service'; // ✅ Adjust path if needed

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule], // ✅ Add CommonModule
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cartItems: any[] = []; 
  cartVisible = false;   
  total = 0;             

  constructor(private cartService: CartService) {}

  ngOnInit() {
    
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getTotal();
  }

  toggleCart() {
    this.cartVisible = !this.cartVisible; 
  }

  onClearCart() {
    this.cartService.clearCart(); 
    this.cartItems = [];
    this.total = 0;
  }

  removeItem(id: string) {
    this.cartService.removeFromCart(id);
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getTotal();
  }
}

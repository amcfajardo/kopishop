import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-order-tracking',
  standalone: true,
  imports: [CommonModule,  RouterModule],
  templateUrl: './order-tracking.component.html',
  styleUrls: ['./order-tracking.component.css']
})
export class OrderTrackingComponent implements OnInit {
  currentOrder: any;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.currentOrder = this.cartService.getLastOrder();
  }

  
  getStatusMessage(status: string) {
    switch (status) {
      case 'received':
        return "We've received your order and will start preparing it soon!";
      case 'preparing':
        return 'Our baristas are carefully crafting your order.';
      case 'ready':
        return 'Your order is ready! Come pick it up at your convenience.';
      case 'completed':
        return 'Thank you for your order! We hope to see you again soon.';
      default:
        return '';
    }
  }

  getProgressValue(status: string) {
    const progressMap: any = { received: 25, preparing: 60, ready: 100, completed: 100 };
    return progressMap[status] || 0;
  }

  isStepActive(step: string): boolean {
    const orderSteps = ['received', 'preparing', 'ready', 'completed'];
    const currentIndex = orderSteps.indexOf(this.currentOrder.status);
    const stepIndex = orderSteps.indexOf(step);
    return currentIndex >= stepIndex;
  }
}

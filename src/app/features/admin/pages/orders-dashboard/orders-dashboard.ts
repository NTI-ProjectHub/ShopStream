import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { OrderService, OrdersResponse, Order } from '../../../../core/Services/order/order';

@Component({
  selector: 'app-orders-dashboard',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './orders-dashboard.html',
  styleUrls: ['./orders-dashboard.css'],
})
export class OrdersDashboard implements OnInit {
  orders: Order[] = [];
  totalOrders: number = 0;
  currentPage: number = 1;
  itemsPerPage: number = 10;
  errorMessage: string | null = null;
  isLoading: boolean = false;

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.loadOrders();
  }

  loadOrders(page: number = this.currentPage) {
    this.isLoading = true;
    this.errorMessage = null;

    this.orderService.getOrders(page, this.itemsPerPage).subscribe({
      next: (response: OrdersResponse) => {
        this.isLoading = false;
        if (response.status === 'success' && response.data) {
          this.orders = response.data;
          this.totalOrders = response.meta.totalOrders;
          this.currentPage = response.meta.currentPage;
          this.itemsPerPage = response.meta.itemsPerPage;
          console.log('✅ Orders loaded:', response);
        } else {
          this.errorMessage = response.message || 'Failed to load orders.';
        }
      },
      error: (error: { error: { message: string; }; }) => {
        this.isLoading = false;
        this.errorMessage = error.error?.message || 'Error loading orders. Please try again.';
        console.error('❌ Error loading orders:', error);
      },
    });
  }

  changePage(page: number) {
    if (page >= 1 && page <= Math.ceil(this.totalOrders / this.itemsPerPage)) {
      this.currentPage = page;
      this.loadOrders(page);
    }
  }

  updateStatus(orderId: string, status: string) {
    this.orderService.updateOrderStatus(orderId, status).subscribe({
      next: (response: any) => {
        console.log('✅ Status updated:', response);
        this.loadOrders(); // Refresh orders
      },
      error: (error: { error: { message: string; }; }) => {
        this.errorMessage = error.error?.message || 'Error updating order status.';
        console.error('❌ Error updating status:', error);
      },
    });
  }
}
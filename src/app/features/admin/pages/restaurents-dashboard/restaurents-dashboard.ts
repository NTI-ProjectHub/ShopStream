import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AdminRestaurantService, RestaurantsResponse, Restaurant } from '../../../../core/Services/adminRestaurents/rest';

@Component({
  selector: 'app-restaurents-dashboard',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './restaurents-dashboard.html',
  styleUrls: ['./restaurents-dashboard.css'],
})
export class RestaurentsDashboard implements OnInit {
  restaurants: Restaurant[] = [];
  totalRestaurants: number = 0;
  currentPage: number = 1;
  itemsPerPage: number = 10;
  errorMessage: string | null = null;
  isLoading: boolean = false;

  constructor(private restaurantService: AdminRestaurantService) {}

  ngOnInit() {
    this.loadRestaurants();
  }

  loadRestaurants(page: number = this.currentPage) {
    this.isLoading = true;
    this.errorMessage = null;

    this.restaurantService.getRestaurants(page, this.itemsPerPage).subscribe({
      next: (response: RestaurantsResponse) => {
        this.isLoading = false;
        if (response.success && response.data) {
          this.restaurants = response.data;
          this.totalRestaurants = response.meta.count;
          this.currentPage = response.meta.page;
          this.itemsPerPage = response.meta.limit;
          console.log('✅ Restaurants loaded:', response);
        } else {
          this.errorMessage = response.message || 'Failed to load restaurants.';
        }
      },
      error: (error: { error: { message: string; }; }) => {
        this.isLoading = false;
        this.errorMessage = error.error?.message || 'Error loading restaurants. Please try again.';
        console.error('❌ Error loading restaurants:', error);
      },
    });
  }

  changePage(page: number) {
    if (page >= 1 && page <= Math.ceil(this.totalRestaurants / this.itemsPerPage)) {
      this.currentPage = page;
      this.loadRestaurants(page);
    }
  }

  updateStatus(restaurantId: string, status: string) {
    this.restaurantService.updateRestaurantStatus(restaurantId, status).subscribe({
      next: (response: any) => {
        console.log('✅ Status updated:', response);
        this.loadRestaurants(); // Refresh restaurants
      },
      error: (error: { error: { message: string; }; }) => {
        this.errorMessage = error.error?.message || 'Error updating restaurant status.';
        console.error('❌ Error updating status:', error);
      },
    });
  }
}
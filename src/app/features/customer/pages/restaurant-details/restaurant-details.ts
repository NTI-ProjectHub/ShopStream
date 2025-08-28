import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { restaurantservices } from './../../../../core/Services/restaurant/restaurant';
import { MenuItem } from '../../components/menu-item/menu-item';

// Define interfaces for type safety
interface Restaurant {
  _id: string;
  name: string;
  address: string;
  coverImage: string;
  description: string;
  phone: string;
  rating: number;
  status: string;
  type: string[];
  username: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  completedOrders: number;
}

interface Menu {
  _id: string;
  name: string;
  description: string;
  image: string;
  restaurantId: string;
}

interface SubMenu {
  _id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  isAvailable: boolean;
  menuId: string;
  price?: number; // Optional price for future API integration
}

interface RestaurantResponse {
  success: boolean;
  message: string;
  data: {
    restaurant: Restaurant;
    menu: Menu;
    subMenus: SubMenu[];
  };
}

@Component({
  selector: 'app-restaurant-details',
  standalone: true,
  imports: [CommonModule, MenuItem], // Added CommonModule
  templateUrl: './restaurant-details.html',
  styleUrls: ['./restaurant-details.css']
})
export class RestaurantDetails implements OnInit {
  id: string = '';
  restaurant: Restaurant | null = null;
  menu: Menu | null = null;
  subMenus: SubMenu[] = [];
  error: string | null = null;
  buttons = ['Delivery', 'Pickup', 'Group order'];

  // Dummy reviews (since API doesn't provide reviews)
  reviews = [
    { rating: 5, text: 'Très bien 👍', author: 'Max...', date: '16/03/25' },
    { rating: 5, text: 'rapide', author: 'car...', date: '13/02/25' }
  ];

  constructor(
    private route: ActivatedRoute,
    private restaurantServices: restaurantservices
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    if (this.id) {
      this.restaurantServices.getRestaurantById(this.id).subscribe({
        next: (res: RestaurantResponse) => {
          if (res.success && res.data) {
            this.restaurant = res.data.restaurant;
            this.menu = res.data.menu;
            this.subMenus = res.data.subMenus || [];
            console.log('✅ Restaurant:', this.restaurant);
            console.log('✅ Menu:', this.menu);
            console.log('✅ SubMenus:', this.subMenus);
          } else {
            this.error = 'No restaurant data found';
            console.error('❌ No restaurant data found:', res.message);
          }
        },
        error: (error: any) => {
          this.error = 'Failed to load restaurant details';
          console.error('❌ Error fetching restaurant:', error);
        }
      });
    } else {
      this.error = 'Invalid restaurant ID';
      console.error('❌ Invalid restaurant ID');
    }
  }

  // Helper method to format rating for display
  getFormattedRating(): string {
    return this.restaurant ? `${this.restaurant.rating.toFixed(1)}★` : '0.0★';
  }

  // Helper method to derive delivery fee (since API doesn't provide it)
  getDeliveryFee(): string {
    return this.restaurant ? '2.49 € Delivery Fee' : 'N/A';
  }

  // Helper method to estimate delivery time (since API doesn't provide it)
  getDeliveryTime(): string {
    return this.restaurant ? '15-20 min' : 'N/A';
  }

  // Helper method to estimate reviews count (since API doesn't provide it)
  getReviewsCount(): string {
    return this.restaurant && this.restaurant.completedOrders > 0
      ? `${this.restaurant.completedOrders}+`
      : 'No reviews yet';
  }

  selectOption(option: string) {
    console.log(`Selected: ${option}`);
    // Implement logic for Delivery, Pickup, Group order
  }
}
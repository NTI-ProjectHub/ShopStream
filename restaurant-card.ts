import { Component } from '@angular/core';
import { Restaurantcarddata } from '../../../restaurantcarddata';

@Component({
  selector: 'app-restaurant-card',
  imports: [],
  templateUrl: './restaurant-card.html',
  styleUrl: './restaurant-card.css'
})
// interface RestaurantCardDataType {
//    offer: string;
//    name: string;
//    location: string;
//    deliveryFee: {
//       amount: number;
//       currency: string;
//    };
//    rating: {
//       value: number;
//       reviewsCount: number;
//    };
//    deliveryTimeMinutes: number;
// }

export class RestaurantCard {

   RestaurantCardData: Restaurantcarddata[];

   constructor() {
      this.RestaurantCardData = [
         {
            offer: '20% OFF',
            name: 'The Spice House',
            location: '123 Main St, Cityville',
            imageUrl: 'imgi_128_08829600257ed8168dd856cafb7446c8.jpg',
            deliveryFee: {
               amount: 2.99,
               currency: 'USD'
            },
            rating: {
               value: 4.5,
               reviewsCount: 120
            },
            deliveryTimeMinutes: 30
         },
         {
            offer: 'Free Delivery',
            name: 'Pasta Palace',
            location: '456 Elm St, Townsville',
            imageUrl: 'imgi_128_08829600257ed8168dd856cafb7446c8.jpg',
            deliveryFee: {
               amount: 0.00,
               currency: 'USD'
            },
            rating: {
               value: 4.2,
               reviewsCount: 85
            },
            deliveryTimeMinutes: 25
         },
         {
            offer: '20% OFF',
            name: 'The Spice House',
            location: '123 Main St, Cityville',
            imageUrl: 'imgi_128_08829600257ed8168dd856cafb7446c8.jpg',
            deliveryFee: {
               amount: 2.99,
               currency: 'USD'
            },
            rating: {
               value: 4.5,
               reviewsCount: 120
            },
            deliveryTimeMinutes: 30
         },
         {
            offer: 'Free Delivery',
            name: 'Pasta Palace',
            location: '456 Elm St, Townsville',
            imageUrl: 'imgi_128_08829600257ed8168dd856cafb7446c8.jpg',
            deliveryFee: {
               amount: 0.00,
               currency: 'USD'
            },
            rating: {
               value: 4.2,
               reviewsCount: 85
            },
            deliveryTimeMinutes: 25
         },
         {
            offer: '20% OFF',
            name: 'The Spice House',
            location: '123 Main St, Cityville',
            imageUrl: 'imgi_128_08829600257ed8168dd856cafb7446c8.jpg',
            deliveryFee: {
               amount: 2.99,
               currency: 'USD'
            },
            rating: {
               value: 4.5,
               reviewsCount: 120
            },
            deliveryTimeMinutes: 30
         },
         {
            offer: 'Free Delivery',
            name: 'Pasta Palace',
            location: '456 Elm St, Townsville',
            imageUrl: 'imgi_128_08829600257ed8168dd856cafb7446c8.jpg',
            deliveryFee: {
               amount: 0.00,
               currency: 'USD'
            },
            rating: {
               value: 4.2,
               reviewsCount: 85
            },
            deliveryTimeMinutes: 25
         }
      ];
   }

}

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-restaurant-card',
  imports: [RouterModule],
  templateUrl: './restaurant-card.html',
  styleUrl: './restaurant-card.css'
})
export class RestaurantCard {
  deliveries = [
    {
      id: 1,
      name: 'Burger King',
      img: 'speedy-deliveries/burger-king.webp',
      fee: '2.49 € Delivery Fee',
      rating: 4.0,
      reviews: '3,000+',
      time: '15 min',
    },
    {
      id: 2,
      name: 'Subway',
      img: 'speedy-deliveries/subway.webp',
      fee: '2.49 € Delivery Fee',
      rating: 4.3,
      reviews: '700+',
      time: '13 min',
    },
    {
      id: 3,
      name: 'French Barclette',
      img: 'speedy-deliveries/french-barclette.webp',
      fee: '2.99 € Delivery Fee',
      rating: 4.4,
      reviews: '3,000+',
      time: '18 min',
    },
    {
      id: 4,
      name: 'Buffalo Grill',
      img: 'speedy-deliveries/buffalo-grill.webp',
      fee: '1.49 € Delivery Fee',
      rating: 4.3,
      reviews: '2,000+',
      time: '17 min',
    },
  ];
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-details',
  imports: [],
  templateUrl: './restaurant-details.html',
  styleUrl: './restaurant-details.css'
})
export class RestaurantDetails {
  id: number | null = null;

  restaurants = [
    {
      id: 1,
      name: 'Burger King',
      img: 'restaurant-details/burger-king-banner.jpeg',
      fee: '2.49 € Delivery Fee',
      rating: 4.0,
      reviews: '3,000+',
      time: '15 min',
      address: 'Burger King – Bruay-La-Buissière, Parc De La Porte Nord, France 62700',
    },
    {
      id: 2,
      name: 'Subway',
      img: 'restaurant-details/subway-banner.jpeg',
      fee: '2.49 € Delivery Fee',
      rating: 4.3,
      reviews: '700+',
      time: '13 min',
      address: 'Subway – Central Mall, Paris, France',
    },
    {
      id: 3,
      name: 'French Barclette',
      img: 'restaurant-details/french-barclette-banner.jpeg',
      fee: '2.99 € Delivery Fee',
      rating: 4.4,
      reviews: '3,000+',
      time: '18 min',
      address: 'French Barclette – Rue de Rivoli, Paris, France',
    },
    {
      id: 4,
      name: 'Buffalo Grill',
      img: 'restaurant-details/buffalo-grill-banner.jpeg',
      fee: '1.49 € Delivery Fee',
      rating: 4.3,
      reviews: '2,000+',
      time: '17 min',
      address: 'Buffalo Grill – Lyon Centre, France',
    },
  ];

  buttons = ['Delivery', 'Pickup', 'Group order'];

  restaurant: any = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.restaurant = this.restaurants.find(r => r.id === this.id);
  }
}

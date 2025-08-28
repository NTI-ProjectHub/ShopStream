import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { restaurantservices } from '../../../core/Services/restaurant/restaurant';
import { map } from 'rxjs';

@Component({
  selector: 'app-restaurant-card',
  imports: [RouterModule],
  templateUrl: './restaurant-card.html',
  styleUrls: ['./restaurant-card.css']
})
export class RestaurantCard implements OnInit {
  restaurants: any[] = [];
  topRestaurants: any[] = [];
  foodTypes: string[] = [];

  constructor(private restaurantservices: restaurantservices) {}

  ngOnInit(): void {
    this.restaurantservices.getAllRestaurants().pipe(
      map(res => {
        if (res && res.data) {
          // تحويل المطاعم لكروت
          this.restaurants = res.data.map((r: any, index: number) => ({
            id: index + 1,
            name: r.name,
            img: `imgs/img${(index % 12) + 1}.jpg`,
            //i want to say if the index is 12 then make the index -index i mean return it into 0 again
            fee: '2.49 € Delivery Fee',
            rating: (Math.random() * 4 + 1).toFixed(1),
            reviews: Math.floor(Math.random() * 100) + '+',
            type: r.type ? r.type[0] : 'Food'
          }));

          // استخراج الـ Food Types بدون تكرار
          this.foodTypes = Array.from(
            new Set(res.data.map((r: any) => r.type ? r.type[0] : 'Food'))
          );

          // ترتيب المطاعم حسب rating وأيضًا completedOrders
          this.topRestaurants = [...this.restaurants].sort((a, b) => {
            if (b.rating === a.rating) {
              return parseInt(b.reviews) - parseInt(a.reviews);
            }
            return b.rating - a.rating;
          }).slice(0, 8); // أول 8 بس
        }
      })
    ).subscribe({
      error: (err: any) => {
        console.error('Error loading restaurants:', err);
      }
    });
  }
}

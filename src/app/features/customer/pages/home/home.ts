import { Component } from '@angular/core';
import { CategoryTabs } from '../../components/category-tabs/category-tabs';
import { FilterSort } from '../../components/filter-sort/filter-sort';
import { PromoCards } from '../../components/promo-cards/promo-cards';
import { RestaurantCard } from "../../../../shared/components/restaurant-card/restaurant-card";

@Component({
  selector: 'app-home',
  imports: [CategoryTabs, FilterSort, PromoCards, RestaurantCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}

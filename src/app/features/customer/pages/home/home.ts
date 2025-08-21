import { Component } from '@angular/core';
import { CategoryTabs } from '../../components/category-tabs/category-tabs';
import { FilterSort } from '../../components/filter-sort/filter-sort';
import { PromoCards } from '../../components/promo-cards/promo-cards';

@Component({
  selector: 'app-home',
  imports: [CategoryTabs, FilterSort, PromoCards],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}

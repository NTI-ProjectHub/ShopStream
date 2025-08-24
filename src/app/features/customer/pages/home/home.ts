import { Component } from '@angular/core';
import { CategoryTabs } from '../../components/category-tabs/category-tabs';
import { FilterSort } from '../../components/filter-sort/filter-sort';
import { PromoCards } from '../../components/promo-cards/promo-cards';
import { MenuItem } from "../../components/menu-item/menu-item";

@Component({
  selector: 'app-home',
  imports: [CategoryTabs, FilterSort, PromoCards, MenuItem],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}

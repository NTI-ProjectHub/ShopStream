import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideHouse, lucideApple, lucideStore, lucideWine, lucidePill, lucideShoppingBasket, lucidePawPrint, lucideLeaf, lucideHeart, lucideCircuitBoard } from '@ng-icons/lucide';

@Component({
  selector: 'app-left-category-list',
  imports: [NgIcon],
  templateUrl: './left-category-list.html',
  styleUrl: './left-category-list.css',
  viewProviders: [provideIcons({
    lucideHouse,
    lucideApple,
    lucideStore,
    lucideWine,
    lucidePill,
    lucideShoppingBasket,
    lucidePawPrint,
    lucideLeaf,
    lucideHeart,
    lucideCircuitBoard
  })]
})
export class LeftCategoryList {

}
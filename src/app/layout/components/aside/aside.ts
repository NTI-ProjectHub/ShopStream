import { Component, HostListener } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideHouse,
  lucideApple,
  lucideStore,
  lucideWine,
  lucidePill,
  lucideShoppingBasket,
  lucidePawPrint,
  lucideLeaf,
  lucideHeart,
  lucideCircuitBoard,
  lucideUsers,
  lucideWallet,
  lucideLifeBuoy,
  lucideCar,
  lucideTicket,
  lucideGift,
  lucideLogOut,
  lucideBuilding2
} from '@ng-icons/lucide';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './aside.html',
  styleUrls: ['./aside.css'],
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
    lucideCircuitBoard,
    lucideUsers,
    lucideWallet,
    lucideLifeBuoy,
    lucideCar,
    lucideTicket,
    lucideGift,
    lucideLogOut,
    lucideBuilding2
  })]
})
export class Aside {
  isOpen = true;

  toggleAside() {
    this.isOpen = !this.isOpen;
  }


closeAside() {
  this.isOpen = false;
}

}

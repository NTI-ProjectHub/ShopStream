import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { FormsModule } from '@angular/forms';
import { featherMenu, featherSearch, featherChevronDown } from '@ng-icons/feather-icons';
import { lucideShoppingCart } from '@ng-icons/lucide';
import { Aside } from '../aside/aside'; // استدعاء الكمبونينت

@Component({
  selector: 'app-navbar',
  imports: [NgIcon, FormsModule, Aside],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  viewProviders: [provideIcons({ featherMenu, lucideShoppingCart, featherSearch, featherChevronDown })]
})
export class Navbar {
  location = 'Berlin';
  time = 'Now';
  searchQuery: string = '';
  showAside = false;

  appear() {
    this.showAside = !this.showAside;
  }
}

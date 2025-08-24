import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { FormsModule } from '@angular/forms';
import { featherMenu, featherSearch, featherChevronDown } from '@ng-icons/feather-icons';
import { lucideShoppingCart } from '@ng-icons/lucide';

@Component({
  selector: 'app-navbar',
  imports: [NgIcon, FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  viewProviders: [provideIcons({ featherMenu, lucideShoppingCart, featherSearch, featherChevronDown })]
})
export class Navbar {
  location = 'Berlin';
  time = 'Now';
  searchQuery: string = '';

  appear() {
    console.log('Menu clicked!');
  }
}

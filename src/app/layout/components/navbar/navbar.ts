import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { featherMenu } from '@ng-icons/feather-icons';
import { lucideShoppingCart } from '@ng-icons/lucide';

@Component({
  selector: 'app-navbar',
  imports: [NgIcon, FormsModule], // Add FormsModule here
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  viewProviders: [provideIcons({ featherMenu, lucideShoppingCart })]
})
export class Navbar {
  location = 'Berlin';
  time = 'Now';
  searchQuery: string = '';
}
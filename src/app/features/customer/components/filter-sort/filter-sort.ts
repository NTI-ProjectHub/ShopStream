import { Component } from '@angular/core';
import { NgIcon, provideIcons } from "@ng-icons/core";
import { heroChevronDown, heroStar, heroTag } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-filter-sort',
  imports: [NgIcon],
  templateUrl: './filter-sort.html',
  styleUrl: './filter-sort.css',
  providers: [
    provideIcons({ heroStar, heroTag, heroChevronDown })
  ]
})
export class FilterSort {
  filters = [
    'Offers',
    'Price',
    'Delivery fee',
    'Highest rated',
    'Rating',
    'Dietary',
    'Sort'
  ];

  dropdowns: Record<string, string[]> = {
    'Price': ['Cheap', 'Moderate', 'Expensive'],
    'Dietary': ['Vegetarian', 'Vegan', 'Halal', 'Gluten-free'],
    'Sort': ['Highest rated', 'Lowest price', 'Fastest delivery']
  };

  openDropdown: string | null = null;

  toggleDropdown(filter: string) {
    this.openDropdown = this.openDropdown === filter ? null : filter;
  }

    closeDropdown() {
    this.openDropdown = null;
  }
}

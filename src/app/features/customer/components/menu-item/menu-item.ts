import { Component, HostListener, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { restaurantservices } from './../../../../core/Services/restaurant/restaurant';

interface SubMenu {
  _id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  isAvailable: boolean;
  menuId: string;
  price?: number; // Optional price field for future API integration
}

interface Section {
  id: string;
  name: string;
  items: SubMenu[];
}

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-item.html',
  styleUrls: ['./menu-item.css']
})
export class MenuItem implements OnInit {
  @Input() subMenus: SubMenu[] = [];
  @Input() restaurantId: string = '';
  sections: Section[] = [];
  activeSection: string = '';
  showOrder: boolean = false;
  selectedItems: SubMenu[] = []; // Track selected items for the order modal
  error: string | null = null;

  constructor(private restaurantServices: restaurantservices) {}

  ngOnInit() {
    if (!this.subMenus || this.subMenus.length === 0) {
      this.error = 'No menu items available';
      return;
    }

    // Group subMenus by category
    const categoryMap = new Map<string, SubMenu[]>();
    this.subMenus.forEach(subMenu => {
      const category = subMenu.category || 'Other';
      if (!categoryMap.has(category)) {
        categoryMap.set(category, []);
      }
      categoryMap.get(category)!.push({
        ...subMenu,
        price: subMenu.price || 0 // Placeholder price
      });
    });

    this.sections = Array.from(categoryMap.entries()).map(([category, items], index) => ({
      id: `section-${index}-${category.toLowerCase().replace(/\s+/g, '-')}`,
      name: category,
      items
    }));

    console.log('✅ MenuItem Sections:', this.sections);
  }

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  @HostListener('window:scroll', [])
  onScroll() {
    let currentSection = '';
    this.sections.forEach(section => {
      const el = document.getElementById(section.id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          currentSection = section.id;
        }
      }
    });
    this.activeSection = currentSection;
  }

  openOrder(item: SubMenu) {
    if (item.isAvailable) {
      this.selectedItems.push(item);
      this.showOrder = true;
      console.log('✅ Added to order:', item);
    }
  }

  closeOrder() {
    this.showOrder = false;
  }

  shareOrder() {
    alert('Sharing order...');
    // Implement sharing logic (e.g., generate shareable link)
  }

  removeItem(index: number) {
    this.selectedItems.splice(index, 1);
    if (this.selectedItems.length === 0) {
      this.showOrder = false;
    }
  }
}
import { Component, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SubMenu {
  _id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  isAvailable: boolean;
  menuId: string;
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
export class MenuItem {
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  @Input() category: string = '';
  @Input() isAvailable: boolean = true;
  @Input() subMenus: SubMenu[] = []; // Input to receive subMenus from parent

  activeSection: string = '';

  // Group subMenus by category
  get sections(): Section[] {
    if (!this.subMenus || this.subMenus.length === 0) {
      return [];
    }

    // Create a map of categories to subMenus
    const categoryMap = new Map<string, SubMenu[]>();
    this.subMenus.forEach(subMenu => {
      const category = subMenu.category || 'Other';
      if (!categoryMap.has(category)) {
        categoryMap.set(category, []);
      }
      categoryMap.get(category)!.push(subMenu);
    });

    // Convert to sections array
    return Array.from(categoryMap.entries()).map(([category, items], index) => ({
      id: `section-${index}-${category.toLowerCase().replace(/\s+/g, '-')}`,
      name: category,
      items
    }));
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

  showOrder = false;

  openOrder() {
    this.showOrder = true;
  }

  closeOrder() {
    this.showOrder = false;
  }

  shareOrder() {
    alert('Sharing order...');
  }
}
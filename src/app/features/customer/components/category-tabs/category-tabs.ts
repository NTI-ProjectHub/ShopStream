import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-category-tabs',
  imports: [],
  templateUrl: './category-tabs.html',
  styleUrl: './category-tabs.css'
})
export class CategoryTabs {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  showLeftArrow = false;
  showRightArrow = false;

  isDragging = false;
  startX = 0;
  scrollLeftValue = 0;

  categories = [
    { name: 'Grocery', image: 'categories/Grocery.png' },
    { name: 'Pizza', image: 'categories/Pizza.png' },
    { name: 'Fast Food', image: 'categories/FastFood.png' },
    { name: 'Halal', image: 'categories/Halal.png' },
    { name: 'Burgers', image: 'categories/Burgers.png' },
    { name: 'Asian', image: 'categories/Asian.png' },
    { name: 'Healthy', image: 'categories/Healthy.png' },
    { name: 'Italian', image: 'categories/Italian.png' },
    { name: 'Indian', image: 'categories/Indian.png' },
    { name: 'Sandwich', image: 'categories/Sandwich.png' },
    { name: 'Wings', image: 'categories/Wings.png' },
    { name: 'BBQ', image: 'categories/BBQ.png' },
    { name: 'American', image: 'categories/American.png' },
    { name: 'Chinese', image: 'categories/Chinese.png' },
    { name: 'Japanese', image: 'categories/Japanese.png' },
    { name: 'Comfort Food', image: 'categories/Comfort.png' },
    { name: 'Bakery', image: 'categories/Bakery.png' },
    { name: 'Street Food', image: 'categories/StreetFood.png' },
    { name: 'Salads', image: 'categories/Salad.png' },
  ];

  ngAfterViewInit() {
    this.checkScroll();
  }

  checkScroll() {
    const el = this.scrollContainer.nativeElement;
    this.showLeftArrow = el.scrollLeft > 0;
    this.showRightArrow = el.scrollLeft + el.clientWidth < el.scrollWidth;
  }

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
  }

  // Dragging (like Uber Eats)
  startDrag(event: MouseEvent | TouchEvent) {
    this.isDragging = true;
    this.startX = ('touches' in event) ? event.touches[0].pageX : event.pageX;
    this.scrollLeftValue = this.scrollContainer.nativeElement.scrollLeft;
  }

  onDrag(event: MouseEvent | TouchEvent) {
    if (!this.isDragging) return;
    const x = ('touches' in event) ? event.touches[0].pageX : event.pageX;
    const walk = this.startX - x;
    this.scrollContainer.nativeElement.scrollLeft = this.scrollLeftValue + walk;
    this.checkScroll();
  }

  stopDrag() {
    this.isDragging = false;
  }
}

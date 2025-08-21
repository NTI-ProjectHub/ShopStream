import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-promo-cards',
  imports: [],
  templateUrl: './promo-cards.html',
  styleUrl: './promo-cards.css'
})
export class PromoCards {
  promos = [
    { title: 'Nordsee', desc: '20% Rabatt auf Klassiker', image: 'promo-cards/imgi_87.webp' },
    { title: 'Zenzei Sushi', desc: 'Tolle Deals und faire Preise', image: 'promo-cards/imgi_88.webp' },
    { title: 'Korean BBQ', desc: 'Jetzt gratis Lieferung sichern', image: 'promo-cards/imgi_89.webp' },
    { title: 'Pizza Hut', desc: 'Knusprige Pizzen zum Angebot', image: 'promo-cards/imgi_90.webp' },
  ];

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  showLeftArrow = false;
  showRightArrow = true;

  ngAfterViewInit() {
    this.checkScroll();
  }

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({ left: -1000, behavior: 'smooth' });
    this.checkScroll();
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({ left: 1000, behavior: 'smooth' });
    this.checkScroll();
  }

  checkScroll() {
    const el = this.scrollContainer.nativeElement;
    this.showLeftArrow = el.scrollLeft > 0;
    this.showRightArrow = el.scrollLeft + el.clientWidth < el.scrollWidth;
  }
}

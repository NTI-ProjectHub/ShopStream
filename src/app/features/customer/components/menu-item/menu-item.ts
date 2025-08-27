import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  imports: [],
  templateUrl: './menu-item.html',
  styleUrl: './menu-item.css'
})
export class MenuItem {
  activeSection: string = '';

  sections = [
    {
      id: 'nouveautes',
      name: 'Nouveautés 🔥',
      items: [
        { title: 'Master Aveyronnais', price: '€17.90', desc: 'Vous aimez l\'aligot ? Découvrez le Master Aveyronnais...', img: 'restaurant-details/nouv.webp' },
        { title: 'Master Alsacien', price: '€15.90', desc: 'Un burger façon flammekueche ? Découvrez...', img: 'restaurant-details/nouv.webp' },
        { title: 'Master Sudiste', price: '€15.90', desc: 'Ca sent bon le sud ! Découvrez...', img: 'restaurant-details/nouv.webp' }
      ]
    },
    {
      id: 'bonsplans',
      name: 'Bons plans à partager 👏',
      items: [
        { title: 'Baby Burgers x3', price: '€12.90', desc: 'Découvrez les Baby Burgers : vos burgers préférés...', img: 'restaurant-details/nouv.webp' },
        { title: 'Baby Burgers x9', price: '€32.90', desc: 'Découvrez les Baby Burgers : vos burgers préférés...', img: 'restaurant-details/nouv.webp' },
        { title: 'Menu Baby Burgers x3', price: '€15.10', desc: 'Découvrez les Baby Burgers en menu...', img: 'restaurant-details/nouv.webp' },
        { title: 'Menu Baby Burgers x9', price: '€38.80', desc: 'Découvrez les Baby Burgers en menu...', img: 'restaurant-details/nouv.webp' },
        { title: 'Menu Baby Burgers x9', price: '€38.80', desc: 'Découvrez les Baby Burgers en menu...', img: 'restaurant-details/nouv.webp' }
      ]
    },
    {
      id: 'menusPoulet',
      name: 'Menus Poulet 🍗',
      items: [
        { title: 'Baby Burgers x3', price: '€12.90', desc: 'Découvrez les Baby Burgers : vos burgers préférés...', img: 'restaurant-details/nouv.webp' },
        { title: 'Baby Burgers x9', price: '€32.90', desc: 'Découvrez les Baby Burgers : vos burgers préférés...', img: 'restaurant-details/nouv.webp' },
        { title: 'Menu Baby Burgers x3', price: '€15.10', desc: 'Découvrez les Baby Burgers en menu...', img: 'restaurant-details/nouv.webp' },
        { title: 'Menu Baby Burgers x9', price: '€38.80', desc: 'Découvrez les Baby Burgers en menu...', img: 'restaurant-details/nouv.webp' },
        { title: 'Menu Baby Burgers x9', price: '€38.80', desc: 'Découvrez les Baby Burgers en menu...', img: 'restaurant-details/nouv.webp' },
        { title: 'Baby Burgers x3', price: '€12.90', desc: 'Découvrez les Baby Burgers : vos burgers préférés...', img: 'restaurant-details/nouv.webp' },
        { title: 'Baby Burgers x9', price: '€32.90', desc: 'Découvrez les Baby Burgers : vos burgers préférés...', img: 'restaurant-details/nouv.webp' },
        { title: 'Menu Baby Burgers x3', price: '€15.10', desc: 'Découvrez les Baby Burgers en menu...', img: 'restaurant-details/nouv.webp' },
        { title: 'Menu Baby Burgers x9', price: '€38.80', desc: 'Découvrez les Baby Burgers en menu...', img: 'restaurant-details/nouv.webp' },
        { title: 'Menu Baby Burgers x9', price: '€38.80', desc: 'Découvrez les Baby Burgers en menu...', img: 'restaurant-details/nouv.webp' }
      ]
    },
    {
      id: 'menusBoeuf',
      name: 'Menus Boeuf 🥩',
      items: [
        { title: 'Baby Burgers x3', price: '€12.90', desc: 'Découvrez les Baby Burgers : vos burgers préférés...', img: 'restaurant-details/nouv.webp' },
        { title: 'Baby Burgers x9', price: '€32.90', desc: 'Découvrez les Baby Burgers : vos burgers préférés...', img: 'restaurant-details/nouv.webp' },
        { title: 'Menu Baby Burgers x3', price: '€15.10', desc: 'Découvrez les Baby Burgers en menu...', img: 'restaurant-details/nouv.webp' },
        { title: 'Menu Baby Burgers x9', price: '€38.80', desc: 'Découvrez les Baby Burgers en menu...', img: 'restaurant-details/nouv.webp' },
        { title: 'Menu Baby Burgers x9', price: '€38.80', desc: 'Découvrez les Baby Burgers en menu...', img: 'restaurant-details/nouv.webp' },
        { title: 'Baby Burgers x3', price: '€12.90', desc: 'Découvrez les Baby Burgers : vos burgers préférés...', img: 'restaurant-details/nouv.webp' },
        { title: 'Baby Burgers x9', price: '€32.90', desc: 'Découvrez les Baby Burgers : vos burgers préférés...', img: 'restaurant-details/nouv.webp' },
        { title: 'Menu Baby Burgers x3', price: '€15.10', desc: 'Découvrez les Baby Burgers en menu...', img: 'restaurant-details/nouv.webp' },
        { title: 'Menu Baby Burgers x9', price: '€38.80', desc: 'Découvrez les Baby Burgers en menu...', img: 'restaurant-details/nouv.webp' },
        { title: 'Menu Baby Burgers x9', price: '€38.80', desc: 'Découvrez les Baby Burgers en menu...', img: 'restaurant-details/nouv.webp' }
      ]
    }
  ];

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
    alert("Sharing order...");
  }
}

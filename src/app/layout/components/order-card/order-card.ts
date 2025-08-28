import { Component } from '@angular/core';

@Component({
  selector: 'app-order-card',
  imports: [],
  templateUrl: './order-card.html',
  styleUrl: './order-card.css'
})
export class OrderCard {

  disappear(){
    const card = document.querySelector('.card') as HTMLElement;
    if (card) {
      card.style.display = 'none';
    }
  }
}

import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-aside-category-list',
  imports: [ RouterOutlet,Footer],
  templateUrl: './aside-category-list.html',
  styleUrl: './aside-category-list.css'
})
export class AsideCategoryList {

}

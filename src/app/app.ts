import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./layout/components/navbar/navbar";
import { Footer } from "./layout/components/footer/footer";
import { LeftCategoryList } from './layout/components/left-category-list/left-category-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer,LeftCategoryList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'ShopStream';
}

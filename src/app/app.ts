import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherAirplay ,featherPlusCircle} from '@ng-icons/feather-icons';
import { heroUsers ,heroCommandLine} from '@ng-icons/heroicons/outline';
import { Navbar } from "./layout/components/navbar/navbar";
import { Footer } from "./layout/components/footer/footer";
import { LeftCategoryList } from './layout/components/left-category-list/left-category-list';
import { OrderCard } from './layout/components/order-card/order-card';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIcon, Navbar, Footer,LeftCategoryList,OrderCard],
  viewProviders: [provideIcons({ featherAirplay, featherPlusCircle, heroUsers ,heroCommandLine }),],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ShopStream';
}

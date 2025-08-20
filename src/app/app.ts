import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherAirplay ,featherPlusCircle} from '@ng-icons/feather-icons';
import { heroUsers ,heroCommandLine} from '@ng-icons/heroicons/outline';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgIcon],
  viewProviders: [provideIcons({ featherAirplay, featherPlusCircle, heroUsers ,heroCommandLine }),],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ShopStream';
}

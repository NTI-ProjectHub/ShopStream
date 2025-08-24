import { Routes } from '@angular/router';
import { Home } from './features/customer/pages/home/home';
import { RestaurantDetails } from './features/customer/pages/restaurant-details/restaurant-details';

export const routes: Routes = [
    {path:'', component: Home},
    {path:'home',  redirectTo: '', pathMatch: 'full'},
    { path: 'details/:id', component: RestaurantDetails },
];

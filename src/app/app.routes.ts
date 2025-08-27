import { Routes } from '@angular/router';
import { Home } from './features/customer/pages/home/home';
import { RestaurantDetails } from './features/customer/pages/restaurant-details/restaurant-details';
import { Login } from './features/Auth/login/login';
import { Register } from './features/Auth/register/register';
import { authGuard } from './core/Guards/auth.guard';

export const routes: Routes = [
    {path:'', component: Home, canActivate: [authGuard]},
    {path:'home',  redirectTo: '', pathMatch: 'full'},
    {path:'register',component:Register},
    {path:'login',component:Login},
    { path: 'details/:id', component: RestaurantDetails, canActivate: [authGuard] },
];
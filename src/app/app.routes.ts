import { Routes } from '@angular/router';
import { Home } from './features/customer/pages/home/home';
import { RestaurantDetails } from './features/customer/pages/restaurant-details/restaurant-details';
import { Login } from './features/Auth/login/login';
import { Register } from './features/Auth/register/register';
import { authGuard } from './core/Guards/auth.guard';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  {
    path: '',
    component: MainLayout,
    canActivate: [authGuard],
    children: [
      { path: '', component: Home },
      { path: 'details/:id', component: RestaurantDetails }
    ]
  }
];

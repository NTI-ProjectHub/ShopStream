import { Routes } from '@angular/router';
import { Home } from './features/customer/pages/home/home';
import { RestaurantDetails } from './features/customer/pages/restaurant-details/restaurant-details';
import { Login } from './features/Auth/login/login';
import { Register } from './features/Auth/register/register';
import { authGuard, adminGuard } from './core/Guards/auth.guard';
import { MainLayout } from './layout/main-layout/main-layout';
import { AdminHome } from './features/admin/pages/admin-home/admin-home';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'adminhome', component: AdminHome, canActivate: [adminGuard] }, // Changed to adminGuard
  {
    path: '',
    component: MainLayout,
    canActivate: [authGuard],
    children: [
      { path: '', component: Home },
      { path: 'details/:id', component: RestaurantDetails }
    ]
  },
  { path: '**', redirectTo: '/login' } // Wildcard route for invalid paths
];
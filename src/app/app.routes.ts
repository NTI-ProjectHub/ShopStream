import { Routes } from '@angular/router';
import { Home } from './features/customer/pages/home/home';
import { RestaurantDetails } from './features/customer/pages/restaurant-details/restaurant-details';
import { Login } from './features/Auth/login/login';
import { Register } from './features/Auth/register/register';
import { authGuard, adminGuard } from './core/Guards/auth.guard';
import { MainLayout } from './layout/main-layout/main-layout';
import { AdminHome } from './features/admin/pages/admin-home/admin-home';
import { RestaurentsDashboard } from './features/admin/pages/restaurents-dashboard/restaurents-dashboard';
import { OrdersDashboard } from './features/admin/pages/orders-dashboard/orders-dashboard';
import { Users } from './features/admin/pages/users/users';
import{ AdminDashboard }from './features/admin/components/admin-dashboard/admin-dashboard'

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  {
    path: 'admin',
    component: AdminHome,
    canActivate: [adminGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: AdminDashboard },
      { path: 'restaurents-dashboard', component: RestaurentsDashboard },
      { path: 'orders-dashboard', component: OrdersDashboard },
      { path: 'users', component: Users },
    ],
  },
  {
    path: '',
    component: MainLayout,
    canActivate: [authGuard],
    children: [
      { path: '', component: Home },
      { path: 'details/:id', component: RestaurantDetails },
    ],
  },
  { path: '**', redirectTo: '/login' },
];
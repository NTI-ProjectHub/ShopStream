import { Routes } from '@angular/router';
import { Home } from './features/customer/pages/home/home';

export const routes: Routes = [
    {path:'', component: Home},
    {path:'home',  redirectTo: '', pathMatch: 'full'}
];

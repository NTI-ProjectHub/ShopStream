import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AdminNav } from '../../components/admin-nav/admin-nav';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AdminNav],
  templateUrl: './admin-home.html',
  styleUrls: ['./admin-home.css'],
})
export class AdminHome {}
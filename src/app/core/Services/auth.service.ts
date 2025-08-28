import { Injectable } from '@angular/core';
import { GlobalInfo } from './global/global-info';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isAuthenticated = false;

  constructor(private globalInfo: GlobalInfo) {
    // Initialize authentication state from GlobalInfo
    const user = this.globalInfo.getUserInfo();
    this._isAuthenticated = !!user && !!user.email && user.role !== '';
  }

  isAuthenticated(): boolean {
    // Check if user is logged in based on GlobalInfo
    const user = this.globalInfo.getUserInfo();
    return !!user && !!user.email && user.role !== '';
  }

  isAdmin(): boolean {
    // Check if user has admin role
    const user = this.globalInfo.getUserInfo();
    return this.isAuthenticated() && user.role === 'admin';
  }

  login(user: { userName: string; name: string; email: string; role: string }) {
    this._isAuthenticated = true;
    this.globalInfo.setUserInfo(user);
  }

  logout() {
    this._isAuthenticated = false;
    this.globalInfo.clearUserInfo();
  }
}
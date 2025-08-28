import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface User {
  userName: string;
  name: string;
  email: string;
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class GlobalInfo {
  private userInfoSubject = new BehaviorSubject<User>(this.getInitialUser());
  userInfo$ = this.userInfoSubject.asObservable();

  private getInitialUser(): User {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const data = localStorage.getItem('userInfo');
      return data ? JSON.parse(data) : { userName: '', name: 'none', email: '', role: '' };
    }
    // Default for server-side rendering
    return { userName: '', name: 'none', email: '', role: '' };
  }

  setUserInfo(user: User) {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem('userInfo', JSON.stringify(user));
    }
    this.userInfoSubject.next(user);
  }

  getUserInfo(): User {
    return this.userInfoSubject.value;
  }
  

  clearUserInfo() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.removeItem('userInfo');
      localStorage.removeItem('auth_token'); // Clear token for consistency
    }
    this.userInfoSubject.next({ userName: '', name: 'none', email: '', role: '' });
  }

  // Optional: Manage auth token
  setAuthToken(token: string) {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem('auth_token', token);
    }
  }

  getAuthToken(): string | null {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      return localStorage.getItem('auth_token');
    }
    return null;
  }
}
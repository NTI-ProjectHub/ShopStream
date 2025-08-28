import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalInfo {
  private userInfoSubject = new BehaviorSubject<any>(this.getInitialUser());
  userInfo$ = this.userInfoSubject.asObservable();

  private getInitialUser() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const data = localStorage.getItem('userInfo');
      return data ? JSON.parse(data) : { userName: '', name: 'none', email: '',role:'' };
    }
    // لو بنعمل render من السيرفر
    return { userName: '', name: 'none', email: '',role:'' };
  }

  setUserInfo(user: any) {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem('userInfo', JSON.stringify(user));
    }
    this.userInfoSubject.next(user);
  }

  getUserInfo() {
    return this.userInfoSubject.value;
  }

  clearUserInfo() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.removeItem('userInfo');
    }
    this.userInfoSubject.next({ userName: '', name: 'none', email: '',role:'' });
  }
}

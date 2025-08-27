import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./layout/components/navbar/navbar";
import { Footer } from "./layout/components/footer/footer";
import { LeftCategoryList } from './layout/components/left-category-list/left-category-list';
import { GlobalInfo } from './core/Services/global/global-info';
import { Login } from "./features/Auth/login/login";
import { Register } from "./features/Auth/register/register";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer, LeftCategoryList, Login, Register],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  isAuthenticated: boolean = false;
  protected title = 'ShopStream';

  constructor(private globalInfo: GlobalInfo) {}

  ngOnInit() {
    // 📌 نشوف إذا فيه بيانات يوزر مخزنة ولا لأ
    const user = this.globalInfo.getUserInfo();
    this.isAuthenticated = !!(user && user.userName);

    // 📌 لو عايز تتابع أي تحديثات على بيانات اليوزر (Login/Logout)
    this.globalInfo.userInfo$.subscribe((user) => {
      this.isAuthenticated = !!(user && user.userName);
    });
  }
}

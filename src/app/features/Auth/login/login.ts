import { AuthService } from './../../../core/Services/auth.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginServices } from '../../../core/Services/Auth/login/login';
import { GlobalInfo } from '../../../core/Services/global/global-info';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  form: any;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginServices,
    private globalInfo: GlobalInfo,
    private router: Router,
    private authService: AuthService
  ) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const { username, password, email } = this.form.value;

      this.loginService.login(username, password, email).subscribe({
        next: (response: any) => {
          console.log('✅ Login successful:', response);
          this.authService.isAuthenticated = () => true;

          // 👇 Store user data in GlobalInfo using the correct path
          if (response.data && response.data.user) {
            this.globalInfo.setUserInfo({
              userName: response.data.user.username, // Use username from response
              name: response.data.user.name,
              email: response.data.user.email,
              role: response.data.user.role // Correct path to access role
            });
          }

          // 👇 Store the token (if returned by the API)
          if (response.token) {
            localStorage.setItem('auth_token', response.token);
          }

          alert('Login Success!');
          console.log('🌍 Global User Info:', this.globalInfo.getUserInfo());
          if(this.authService.isAdmin()){
            console.log('iam admin :)');
            this.router.navigate(['admin/home']);
          }
          else{
            // 👇 Navigate to the main layout or dashboard
            this.router.navigate(['/']);

          }
        },
        error: (error) => {
          console.error('❌ Login failed:', error);
          alert('Login Failed!');
        },
      });
    } else {
      alert('❌ Please enter username and password.');
    }
  }
}
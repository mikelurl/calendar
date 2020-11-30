import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() {}

  getAuthStatus(): boolean {
    let temp: String = sessionStorage.getItem('isLoggedIn');
    if (temp === 'true') {
      return true;
    } else {
      return false;
    }
  }

  login(): void {
    sessionStorage.setItem('isLoggedIn', 'true');
  }

  logout(): void {
    sessionStorage.removeItem('isLoggedIn')
  }
}

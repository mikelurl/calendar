import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {

  constructor(private authService: AuthService, private routerService: Router,) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout();
    this.routerService.navigate(['start']);
  }
}

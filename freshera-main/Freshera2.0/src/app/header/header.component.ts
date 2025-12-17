import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  showBackground: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateBackgroundVisibility();
      }
    });
  }

  ngOnInit(): void {
    this.updateBackgroundVisibility();
  }

  private updateBackgroundVisibility(): void {
    this.showBackground = this.router.url === '/home' || this.router.url === '/';
  }
}

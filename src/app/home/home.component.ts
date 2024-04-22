import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToAbout(fragment: any) {
    this.router.navigateByUrl(fragment);
  }
  goToContact(fragment: any) {
    this.router.navigateByUrl(fragment);
  }

  goToLink(fragment: any) {
    this.router.navigateByUrl(fragment);
  }
}

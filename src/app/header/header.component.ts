import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
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

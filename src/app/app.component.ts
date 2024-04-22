import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'personal-website';
  constructor(private router: Router) {}

  ngOnInit(): void {}

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

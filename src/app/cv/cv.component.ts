import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  downloadit() {
    let link = document.createElement('a');
    link.download = 'itcv.pdf';
    link.href = '../assets/itcv.pdf';
    link.click();
  }

  downloaden() {
    let link = document.createElement('a');
    link.download = 'encv.pdf';
    link.href = '../assets/encv.pdf';
    link.click();
  }
}

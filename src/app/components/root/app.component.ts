import {Component, NgZone} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {'class':'flex vertical layout'}
})
export class AppComponent {

  clickTest() {
    try {
      NgZone.assertInAngularZone();
    } catch(e) {
      alert(e);
      throw e;
    }

  }
}

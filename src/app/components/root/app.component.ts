import {Component, NgZone} from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {'class':'flex vertical layout'}
})
export class AppComponent {

  constructor(private http: Http) {

  }

  testIfInNgZone() {
    try {
      NgZone.assertInAngularZone();
      alert('Happy! We are in NgZone.')
    } catch(e) {
      alert(e);
      throw e;
    }
  }

  clickTest() {
    this.testIfInNgZone();
  }

  rxJsTest() {
    this.http.post('http://jsonplaceholder.typicode.com', {}).subscribe((res)=>{
      this.testIfInNgZone();
    },(err)=>{
      this.testIfInNgZone();
    });
  }
}

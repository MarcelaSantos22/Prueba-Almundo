import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public hoteles: any = [];

  constructor() {}


  showData(event): void {
    this.hoteles = event;
  }
}

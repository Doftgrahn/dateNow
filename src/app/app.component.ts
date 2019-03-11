import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  today: number;
  title: string = 'Övningar!';


  constructor() {

    setInterval(() => {
      this.today = Date.now();
    }, 1000);
  }

}

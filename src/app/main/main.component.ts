import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  today: number;
  title: string = 'Övningar!';




  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.today = Date.now();
    }, 1000);


  }

}

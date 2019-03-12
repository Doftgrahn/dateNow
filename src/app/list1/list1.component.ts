import { Component, OnInit } from '@angular/core';
import { ListitemService } from '../listitem.service';


@Component({
  selector: 'app-list1',
  templateUrl: './list1.component.html',
  styleUrls: ['./list1.component.scss']
})
export class List1Component implements OnInit {
  constructor(listItemService: ListitemService) {
    this.dataArray = listItemService.data;
    console.log(this.dataArray.length)
  }

  dateToggle: number = 0;
  dataArray: Date[];

  showAll() {
    this.dateToggle = 0;
  }

  onlyDates() {
    this.dateToggle = 1;
  }

  onlyYear() {
    this.dateToggle = 2
  }

  onlyMonths() {
    this.dateToggle = 3
  }


  ngOnInit() { }

}

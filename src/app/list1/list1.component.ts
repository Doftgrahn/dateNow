import { Component, OnInit } from '@angular/core';
import { ListitemService } from '../listitem.service';


@Component({
  selector: 'app-list1',
  templateUrl: './list1.component.html',
  styleUrls: ['./list1.component.scss']
})
export class List1Component implements OnInit {

  dataArray: Date[];

  constructor(listItemService: ListitemService) {
    this.dataArray = listItemService.data;
  }

  dateToggle: number = 0;

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

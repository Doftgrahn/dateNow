import { Component, OnInit } from '@angular/core';
import {ListitemService} from '../listitem.service';

@Component({
  selector: 'app-list1',
  templateUrl: './list1.component.html',
  styleUrls: ['./list1.component.scss']
})
export class List1Component implements OnInit {

dataArray:Date[];


constructor(listItemService:ListitemService) {
this.dataArray = listItemService.data;
  }


  onlyDates() {

    let showDates = this.dataArray;
    console.log(showDates.getDate())

     console.log('Funkar det?', this.dataArray)
  }





  ngOnInit() {}

}

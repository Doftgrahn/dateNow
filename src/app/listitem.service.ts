import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListitemService {

  data: Date[] = [new Date('1992-08-06'), new Date('2003-07-12'), new Date('1902-02-26'), new Date('1922-02-22'), new Date('2033-09-30'), new Date('2020-02-04'), new Date('1990-02-03')];





  constructor() { }

}

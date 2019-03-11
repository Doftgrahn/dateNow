import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListitemService {

  data: Date[] = [new Date('1992-03-06'), new Date('2003-03-12'), new Date('1902-02-22'), new Date('1922-02-22'), new Date('2033-03-30'), new Date('2020-02-03'), new Date('1990-02-03')];





  constructor() { }

}

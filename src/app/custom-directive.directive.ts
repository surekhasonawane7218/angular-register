import { Directive } from '@angular/core';
import { DataService } from './data.service';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(private serv:DataService) {
    this.serv.getAllData().subscribe((res)=>{
      console.log(res);
    })
   }

}

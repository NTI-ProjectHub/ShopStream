import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appClickevent]'
})
export class Clickevent {

  constructor(ele:ElementRef) 
  {
    ele.nativeElement.addEventListener('click',()=>{
      
     
    })
   }

}

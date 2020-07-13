import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChandanService {
/*
Objservable - it has 3 functions -output
next () - value emit
Error() - if error 
complete() - successfully completed 

*/
  constructor() { }

  obsSlide1()
  {
    //creates an observalbe that emits sequntial numbers every specified interval of time.
    return interval(2000);
  }

  chandanObs():Observable<number>
  {
    return  Observable.create(
      sub=>{
        for(let i=1;i<=100;i++)
        {
          if(i==70)
          {
            sub.error(new Error("this is error from obseravble"))
          }
          sub.next(i);//emiting value - it can reeturn any ,here in our case it is returning number
        }
        sub.complete();//successfully complete  - it reutrn void nothing
      }
    )
    
  }


}

export interface intSlide1
{
  prodName:string;
  imgName:string;
}

/*
when does observable start emitting - this timeing matters

hot observable - start emitting items as soon as it is created so any observer who later subscribes to that 
observable may start observing the sequence somewhere in middle.

ex- youtube live 

cold observable - wait untill the observer subscribes to it before it begin to emit items , and so 
a  objserver is garanteed to see the whole sequence from the begining .
ex youtube upload vide you watch

untill the subscriber subscribe - cold observerable does not begin to emit items.
*/
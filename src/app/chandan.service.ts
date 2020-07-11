import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

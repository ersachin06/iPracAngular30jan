import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IcsdServiceService {

  // slides:Array<IntSlide>=[
  //   {prodName:'',imgName:''}
  // ];



  constructor() { }

  obsSlide()
  {
    //creates an observable that emits sequential numbers every specified interval of time.
    return interval(   2000  );
  }
  obsIcsd():Observable<number>
  {
    return Observable.create(
      sub=>{
        for(let i=0;i<=100;i++)
        {
          if(i==50)
          {
           // sub.error(new Error("This is simple error"));
          }
          else
          {          
              sub.next(i);                      
           
          }
          
        }
        
          sub.complete();  
        
        
      }
      
    )
  }


}


export interface IntSlide
{
    prodName:string;
    imgName:string;
}
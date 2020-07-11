import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IcsdServiceService {

  constructor() { }

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

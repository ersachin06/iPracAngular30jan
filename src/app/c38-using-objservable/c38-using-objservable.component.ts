import { Component, OnInit, OnDestroy } from '@angular/core';
import { IcsdServiceService } from '../icsd-service.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-c38-using-objservable',
  templateUrl: './c38-using-objservable.component.html',
  styleUrls: ['./c38-using-objservable.component.css']
})
export class C38UsingObjservableComponent implements OnInit,OnDestroy 
{
  mySub:Subscription;
  x:number=0;
  constructor(private service:IcsdServiceService) 
  {


   }
  ngOnDestroy(): void {
      this.mySub.unsubscribe();
  }

  ngOnInit() 
  {
    
    
    this.mySub=this.service.obsIcsd().subscribe(
      iter=>{
         
            console.log(iter+" sachin ")    
          this.x=iter;

        },
      err=> console.log(err),
      ()=> console.log("successfully completed")
    )
  }


}

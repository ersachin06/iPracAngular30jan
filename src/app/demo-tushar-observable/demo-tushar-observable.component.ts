import { Component, OnInit ,OnDestroy} from '@angular/core';
import { ChandanService } from '../chandan.service';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-demo-tushar-observable',
  templateUrl: './demo-tushar-observable.component.html',
  styleUrls: ['./demo-tushar-observable.component.css']
})
export class DemoTusharObservableComponent implements OnInit,OnDestroy {

  x:Subscription;
  constructor(private service:ChandanService) 
  {

   }
  ngOnDestroy(): void {
    this.x.unsubscribe();
  }

  ngOnInit() 
  {
    /*
    Every objseravle can be subscribe- - only when we subscribe the objesrable than only objseravable start
    publishing values .
    subscribe() returan a subscription object that has an unsubscribe() method ,
    this method we call to stop notification

    */
     this.x= this.service.chandanObs().subscribe(      
      
      it=>{
        if(it>=30)
        {
        console.log(it + " inside subscriber method")
        }
      },

      err=>console.log(err),
      ()=>console.log('sucessfully compleeted')
    )
  }

}

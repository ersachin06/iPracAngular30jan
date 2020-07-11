import { Component, OnInit } from '@angular/core';
import { ChandanService } from '../chandan.service';

@Component({
  selector: 'app-demo-tushar-observable',
  templateUrl: './demo-tushar-observable.component.html',
  styleUrls: ['./demo-tushar-observable.component.css']
})
export class DemoTusharObservableComponent implements OnInit {

  constructor(private service:ChandanService) 
  {

   }

  ngOnInit() 
  {
    /*
    Every objseravle can be subscribe- - only when we subscribe the objesrable than only objseravable start
    publishing values 
    */
       this.service.chandanObs().subscribe(      
      
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

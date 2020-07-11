import { Component, OnInit } from '@angular/core';
import { IcsdServiceService } from '../icsd-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-c38-using-objservable',
  templateUrl: './c38-using-objservable.component.html',
  styleUrls: ['./c38-using-objservable.component.css']
})
export class C38UsingObjservableComponent implements OnInit {

  constructor(private service:IcsdServiceService) 
  {


   }

  ngOnInit() 
  {
    
    
    this.service.obsIcsd().subscribe(
      iter=>{
         
            console.log(iter+" sachin ")    
         

        },
      err=> console.log(err),
      ()=> console.log("successfully completed")
    )
  }

}

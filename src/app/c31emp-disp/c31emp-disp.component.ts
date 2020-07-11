import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import { AppService } from "../app.service";
@Component({
  selector: 'app-c31emp-disp',
  templateUrl: './c31emp-disp.component.html',
  styleUrls: ['./c31emp-disp.component.css']
})
export class C31empDispComponent implements OnInit {

    constructor(private activateRoute:ActivatedRoute,private appService : AppService,private router:Router)
   {
    
  }

  // constructor(private activateRoute:ActivatedRoute,private router:Router,private location:Location)
  // {
  //   //this.catid=this.activateRoute.snapshot.params['id'];
  //   this.catid=this.activateRoute.snapshot.queryParams['id'] || 'NO ID';
  // }



  ngOnInit() {
    this.getAllEmps();
  }
  empList:any=[];
  //MEthod for getting all category on main page
  getAllEmps(){
    this.appService.getAllEmps().subscribe(data=>{
      this.empList=data.empList;
      //console.log("data :"+data);
      console.log(this.empList);
    },error=>{
      console.log('error');
    });
  }

}

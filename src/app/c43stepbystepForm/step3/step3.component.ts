import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {StepService} from './../../step.service';

import {  Router } from '@angular/router';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {

  frmGrp:FormGroup;
  constructor(private fb:FormBuilder,private service:StepService,private router:Router) 
  { 

  }

  ngOnInit(): void 
  {
 
    this.frmGrp=this.fb.group(
      {
          "pincode": this.fb.control('')     , 
          "mobileNo": this.fb.control('')      ,
          
    }
      
    )
  //  console.log(this.frmGrp);
  }
  
  frmStep3Sub()
  {
    console.log(this.frmGrp);//it is a circular structure 
    console.log("Formgroup value "+JSON.stringify(this.frmGrp.value));
    console.log(this.frmGrp.value);//sane output - 
    console.log("pincode control value "+this.frmGrp.controls['pincode'].value);
    console.log("pincode control value "+this.frmGrp.controls['mobileNo'].value);
    let pincode:string;
    let mobileNo:string;
    pincode=this.frmGrp.controls['pincode'].value;
    mobileNo=this.frmGrp.controls['mobileNo'].value;
    this.service.objUser['pincode']=pincode;
    this.service.objUser['mobileNo']=mobileNo;    
    this.service.dispObjUser();
    console.log("this.router.navigate(['step3'])");
    this.router.navigate(['step4']);
  }
}

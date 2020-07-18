import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {StepService} from './../../step.service';

import {  Router } from '@angular/router';
@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {

  frmGrp:FormGroup;
  constructor(private fb:FormBuilder,private service:StepService,private router:Router) 
  { 

  }

  ngOnInit(): void 
  {
 
    this.frmGrp=this.fb.group(
      {
          "fnm": this.fb.control('')     , 
          "lnm": this.fb.control('')      ,
          
    }
      
    )
  //  console.log(this.frmGrp);
  }
  
  frmStep1Sub()
  {
    console.log(this.frmGrp);//it is a circular structure 
    console.log("Formgroup value "+JSON.stringify(this.frmGrp.value));
    console.log(this.frmGrp.value);//sane output - 
    console.log("empno control value "+this.frmGrp.controls['fnm'].value);
    let fnm:string;
    let lnm:string;
    fnm=this.frmGrp.controls['fnm'].value;
    lnm=this.frmGrp.controls['lnm'].value;
    this.service.objUser['fnm']=fnm;
    this.service.objUser['lnm']=lnm;    
    this.service.dispObjUser();
    console.log("this.router.navigate(['step2'])");
    this.router.navigate(['step2']);
  }
}

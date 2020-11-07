import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {StepService} from './../../step.service';

import {  Router } from '@angular/router';


@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css']
})
export class Step4Component implements OnInit {

  frmGrp:FormGroup;
  constructor(private fb:FormBuilder,private service:StepService,private router:Router) 
  { 

  }

  ngOnInit(): void 
  {
 
    this.frmGrp=this.fb.group(
      {
          "emailid": this.fb.control('')     , 
          "deptno": this.fb.control('')      ,
          
    }
      
    )
  //  console.log(this.frmGrp);
  }
  
  frmStep4Sub()
  {
    console.log(this.frmGrp);//it is a circular structure 
    console.log("Formgroup value "+JSON.stringify(this.frmGrp.value));
    console.log(this.frmGrp.value);//sane output - 
    console.log("emailid control value "+this.frmGrp.controls['emailid'].value);
    console.log("deptno control value "+this.frmGrp.controls['deptno'].value);
    let emailid:string;
    let deptno:string;
    emailid=this.frmGrp.controls['emailid'].value;
    deptno=this.frmGrp.controls['deptno'].value;
    this.service.objUser['emailid']=emailid;
    this.service.objUser['deptno']=deptno;
    this.service.dispObjUser();
    this.service.saveUserReg(this.service.objUser);
    console.log("inside register");
    
  }
}

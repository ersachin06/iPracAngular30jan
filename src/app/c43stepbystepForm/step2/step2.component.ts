import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {StepService} from './../../step.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {

 
  frmGrp:FormGroup;
  constructor(private fb:FormBuilder,private service:StepService,private router:Router) 
  { 

  }

  ngOnInit(): void 
  {
 
    this.frmGrp=this.fb.group(
      {
          "age": this.fb.control('')     , 
          "gender": this.fb.control('')      
          
    }
      
    )
  //  console.log(this.frmGrp);
  }
  
  frmStep1Sub()
  {
    console.log(this.frmGrp);//it is a circular structure 
    console.log("Formgroup value "+JSON.stringify(this.frmGrp.value));
    console.log(this.frmGrp.value);//sane output - 
    console.log("age control value "+this.frmGrp.controls['age'].value);
    console.log("gender control value "+this.frmGrp.controls['gender'].value);
    let age:number;
    let gender:string;
    age=this.frmGrp.controls['age'].value;
    gender=this.frmGrp.controls['gender'].value;
    this.service.objUser['age']=age;
    this.service.objUser['gender']=gender;
    this.service.dispObjUser();
    this.router.navigate(['step3']);
  }
}

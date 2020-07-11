import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl,ValidationErrors } from '@angular/forms';



@Component({
  selector: 'app-c36-reactiveforms-validations',
  templateUrl: './c36-reactiveforms-validations.component.html',
  styleUrls: ['./c36-reactiveforms-validations.component.css']
})
export class C36ReactiveformsValidationsComponent implements OnInit {

  
  

  frmGrp:FormGroup;
  
   constructor(private fb:FormBuilder) //FormBuilder:  Construct a new `FormGroup` instance.
   { 
 
   }

   
 
   ngOnInit() 
   {
    let emlValidation=Validators.compose(
      [Validators.required,
       Validators.email
     ]
    )

    let enameValidation=Validators.compose
    (
      [
        
        this.isAlphaNumeric
      ]
    )

     this.frmGrp=this.fb.group(
       {
           "empno": this.fb.control('',Validators.required)     , 
           "ename": this.fb.control('',enameValidation)      ,
           "eage": this.fb.control('',Validators.required)      ,
           "eadd": this.fb.control('',Validators.required)      ,
           "esal": this.fb.control('',Validators.required)      ,
           "eemail":this.fb.control('',emlValidation)
     }
       
     )
     
     

     console.log(this.frmGrp);
   }


   isAlphaNumeric(control:AbstractControl ) :ValidationErrors | null
   {
     let inputstr=control.value;
    if (!inputstr.match(/^[0-9a-z]+$/))
    {
      return {isAlphaNumeric:false};
//error not match
    }
    else
    {
      return null;
    }
    
   }

     frmSub()
     {
         console.log(this.frmGrp);//it is a circular structure 
         console.log("Formgroup value "+JSON.stringify(this.frmGrp.value));
         console.log(this.frmGrp.value);//sane output - 
         console.log("empno control value "+this.frmGrp.controls['empno'].value);
         
     }
 }
 
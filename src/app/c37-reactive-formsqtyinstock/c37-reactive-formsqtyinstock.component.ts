import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl,ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-c37-reactive-formsqtyinstock',
  templateUrl: './c37-reactive-formsqtyinstock.component.html',
  styleUrls: ['./c37-reactive-formsqtyinstock.component.css']
})
export class C37ReactiveFormsqtyinstockComponent implements OnInit {

    
  

  frmGrp:FormGroup;
  
   constructor(private fb:FormBuilder) //FormBuilder:  Construct a new `FormGroup` instance.
   { 
 
   }

   
 
   ngOnInit() 
   {
    
     this.frmGrp=this.fb.group(
       {
           "prodid": this.fb.control('',Validators.required)     , 
           "prodname": this.fb.control('',Validators.required)      ,
           "prodqty": this.fb.control('',Validators.required,this.qtyAVailableInStock)      
    
     }
       
     )
     
     

     console.log(this.frmGrp);
   }



     frmSub()
     {
         console.log(this.frmGrp);//it is a circular structure 
         console.log("Formgroup value "+JSON.stringify(this.frmGrp.value));
         console.log(this.frmGrp.value);//sane output - 
         console.log("prodqty control value "+this.frmGrp.controls['prodqty'].value);
         
     }

  qtyAVailableInStock(control : AbstractControl):Observable<ValidationErrors | null>
  {
    let qtyAvailable=100;
    return Observable.create(
      sub=>{
        setTimeout(() => {
            if(control.value>qtyAvailable)          
            {
                sub.next({qtyAVailableInStock:false});//error 
                sub.complete();
            }
            else{
              sub.next(null);//no error 
              sub.complete();
            }
        }, 3000);
      }
    );
     
  }
}

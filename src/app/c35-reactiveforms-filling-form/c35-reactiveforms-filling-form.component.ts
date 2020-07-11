import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Emp } from '../icsdInterfaces/Emp';


@Component({
  selector: 'app-c35-reactiveforms-filling-form',
  templateUrl: './c35-reactiveforms-filling-form.component.html',
  styleUrls: ['./c35-reactiveforms-filling-form.component.css']
})
export class C35ReactiveformsFillingFormComponent implements OnInit {

  obj:Emp ={"empno":100,"ename":'rohan',"eage":21,"eadd":'delhi',"esal":45000};
  

 frmGrp:FormGroup;
 
  constructor(private fb:FormBuilder) //FormBuilder:  Construct a new `FormGroup` instance.
  { 

  }

  ngOnInit() 
  {
    this.frmGrp=this.fb.group(
      {
          "empno": this.fb.control(this.obj.empno)     , 
          "ename": this.fb.control(this.obj.ename)      ,
          "eage": this.fb.control(this.obj.eage)      ,
          "eadd": this.fb.control(this.obj.eadd)      ,
          "esal": this.fb.control(this.obj.esal)      
    }
      
    )
    console.log(this.obj);
    console.log(this.frmGrp);
  }
    frmSub()
    {
        this.frmGrp.patchValue({'empno':1234});
        this.frmGrp.patchValue({'ename':'sachin'});
        this.frmGrp.patchValue({'eage':21});
        this.frmGrp.patchValue({'eadd':'pune'});
        this.frmGrp.patchValue({'esal':95000});



        console.log(this.frmGrp);//it is a circular structure 
        console.log("Formgroup value "+JSON.stringify(this.frmGrp.value));
        console.log(this.frmGrp.value);//sane output - 
        console.log("empno control value "+this.frmGrp.controls['empno'].value);
        
    }
}

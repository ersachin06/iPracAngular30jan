import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-c34-a-reactive-forms-module',
  templateUrl: './c34-a-reactive-forms-module.component.html',
  styleUrls: ['./c34-a-reactive-forms-module.component.css']
})
export class C34AReactiveFormsModuleComponent implements OnInit {

  /*
 FormBuilder:  Construct a new `FormGroup` instance.
 
 @param controlsConfig A collection of child controls. The key for each child is the name
  under which it is registered.
 
  @param formState Initializes the control with an initial value,
   or an object that defines the initial value and disabled state.
     
  @param validator A synchronous validator function, or an array of synchronous validator
      functions.
     
  @param asyncValidator A single async validator or array of async validator functions
     
  */
 frmGrp:FormGroup;
 /*
 FormGroup :   A `FormGroup` aggregates the values of each child `FormControl` into one object,
  with each control name as the key.  It calculates its status by reducing the status values
  of its children. For example, if one of the controls in a group is invalid, the entire
  group becomes invalid.

  `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
  along with `FormControl` and `FormArray`.

  When instantiating a `FormGroup`, pass in a collection of child controls as the first
  argument. The key for each child registers the name for the control.

 */
  constructor(private fb:FormBuilder) //FormBuilder:  Construct a new `FormGroup` instance.
  { 

  }

  ngOnInit() 
  {
    this.frmGrp=this.fb.group(
      {
          "empno": this.fb.control('')     , 
          "ename": this.fb.control('')      ,
          "eage": this.fb.control('')      ,
          "eadd": this.fb.control('')      ,
          "esal": this.fb.control('')      
    }
      
    )
    console.log(this.frmGrp);
  }
    frmSub()
    {
        console.log(this.frmGrp);//it is a circular structure 
        console.log("Formgroup value "+JSON.stringify(this.frmGrp.value));
        console.log(this.frmGrp.value);//sane output - 
        console.log("empno control value "+this.frmGrp.controls['empno'].value);
        /* ouput inside browser
        FormGroup {validator: null, asyncValidator: null, pristine: false, touched: true, _onCollectionChange: ƒ, …}
        c34-a-reactive-forms-module.component.ts:62 Formgroup value {"empno":"1","ename":"2","eage":"3","eadd":"4","esal":"5"}
        c34-a-reactive-forms-module.component.ts:63 {empno: "1", ename: "2", eage: "3", eadd: "4", esal: "5"}
        c34-a-reactive-forms-module.component.ts:64 empno control value 1
        */
    }
}

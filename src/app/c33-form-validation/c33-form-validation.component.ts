import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-c33-form-validation',
  templateUrl: './c33-form-validation.component.html',
  styleUrls: ['./c33-form-validation.component.css']
})
export class C33FormValidationComponent implements OnInit {

  emlPatern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";


  frmData:any;
  constructor() { }

  ngOnInit() {
  }
  frmSub(frm:NgForm)
  {
    this.frmData=frm.value;
    //alert("frm submit called ");
    let x=frm.controls["empno"].value;
  //  alert(x);
   // alert(frm.control("empno").value);
   let fval=frm.value;
       console.log(frm);
       console.log(fval["empno"]);
       console.log(fval["ename"]);
       console.log(fval["address"]);
//console.log(frm["address"]["ecity"]);
      console.log( JSON.stringify(this.frmData));
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-c32-reform-an1',
  templateUrl: './c32-reform-an1.component.html',
  styleUrls: ['./c32-reform-an1.component.css']
})
export class C32ReformAn1Component implements OnInit {

  
  frmData:any;
  constructor() { }

  ngOnInit() {
  }
  frmSub(frm:NgForm)
  {
    this.frmData=frm.value;
    //alert("frm submit called ");
    let x=frm.controls["empno"].value;
    alert(x);
   // alert(frm.control("empno").value);
   let fval=frm.value;
       console.log(frm);
       console.log(fval["empno"]);
       console.log(fval["ename"]);
       console.log(fval["address"]);
//console.log(frm["address"]["ecity"]);
      //console.log( JSON.stringify(this.frmData));
  }
}

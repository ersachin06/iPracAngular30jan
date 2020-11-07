import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from "../app.service";
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-c30-emp-insert-del-update-select',
  templateUrl: './c30-emp-insert-del-update-select.component.html',
  styleUrls: ['./c30-emp-insert-del-update-select.component.css']
})
export class C30EmpInsertDelUpdateSelectComponent implements OnInit {
 
  empno:string;
  constructor(private activateRoute:ActivatedRoute,private appService : AppService,private router:Router)
   {

    this.empno=this.activateRoute.snapshot.queryParams['id'] || 'NO ID';
    console.log("Emp selected is "+ this.empno);
    //this.emp.controls.empno.value=this.empno;
    this.getEmpByEmpno();
    
  }    
  
  empRec:any;
  getEmpByEmpno()
  {
    this.appService.getEmpByEmpno(this.empno).subscribe(data=>{
      this.showSuccess("Emp Successfully reterived","Success");
      this.empRec=data.emp;
      console.log("data "+data);
      console.log("emp is "+ data.emp);
    },error=>{
      console.log('error',error);
    });
  }
  ngOnInit() {
  }
 
  btnClicked:string;
  emp = new FormGroup({
    empno: new FormControl('', [Validators.required]),
    ename: new FormControl('', [Validators.required]),
    eage: new FormControl('', [Validators.required]),
    eadd: new FormControl('',[Validators.required]),
    esal: new FormControl('',[Validators.required]),
       
  });
  // emp = new FormGroup({
  //   empno: new FormControl('', [Validators.required, Validators.maxLength(50),Validators.minLength(1)]),
  //   ename: new FormControl('', [Validators.required, Validators.maxLength(50),Validators.minLength(3)]),
  //   eage: new FormControl('', [Validators.required, Validators.maxLength(25),,Validators.minLength(1)]),
  //   eadd: new FormControl('',[Validators.required, Validators.maxLength(50),,Validators.minLength(3)]),
  //   esal: new FormControl('',[Validators.required, Validators.maxLength(50),,Validators.minLength(4)]),
       
  // });

  empFormOnSubmit()
  {
    let empno = this.emp.controls.empno.value;
    if(this.btnClicked=='delete')
    {
      console.log('delete clicked');
    }
    // else if(this.btnClicked=='update')
    // {
    //   console.log('update clicked'); 
    // }
    else  if(this.btnClicked=='reg' || this.btnClicked=='update')
    {
     
      let ename = this.emp.controls.ename.value;
      let eage = this.emp.controls.eage.value;
      let eadd = this.emp.controls.eadd.value;
      let esal = this.emp.controls.esal.value;
      console.log(empno+" "+ ename+" "+ eage + "  "+eadd +  " "+ esal);
      alert("form submited "+ this.emp.value);
      console.log(this.emp.value);
      this.appService.saveEmp(this.emp.value).subscribe(data=>{
        this.showSuccess("Emp Successfully added","Success");
      
      },error=>{
        console.log('error',error);
      });
    }

   
  }

  selectFun()
{
  this.router.navigate(["/empSelect"]);
  console.log('select btn clicked ');
}

  btnClickedFun(str : string)
  {
    if(str=='delete')
    {
      this.btnClicked='delete';
      /////////alert("btn clicked is d "+ str);
    }
    else if(str=='update')
    {
      this.btnClicked='update';
      //alert("btn clicked is u "+ str);
    }
    else if(str=='reg')
    {
      this.btnClicked='reg';
    }
    
    
    
  }
  showSuccess(msg, title) {
    //this.toastr.successToastr(msg, 'Success!');
    alert(msg+" success " );
  }

  showError(msg, title) {
    //this.toastr.errorToastr(msg, title);
    alert(msg+" error " );
  }
}

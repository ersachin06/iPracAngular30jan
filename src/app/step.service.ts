import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StepService {

  objUser:UserReg;
  constructor() { 
    this.objUser=new UserReg();
  }
  getObjUser():UserReg
  {
    return this.objUser;
  }
  setObjUser(objUser:UserReg)
  {
    this.objUser=objUser;
  }
  dispObjUser()
  {
    console.log(this.objUser);
  }
  saveUserReg(obj:UserReg)
  {
    obj.showUser();
    //code to save data inside database ---
  }
}

export class UserReg
{
  fnm:string;
  lnm:string;
  age:number;
  gender:string;
  pincode:string;
  mobileNo:string;
  emailid:string;
  deptno:string;

  showUser()
  {
    console.log(this.fnm+" "+ this.lnm+ " "+ this.age+ " "+ this.gender+" "+ this.pincode+" "+this.mobileNo+" "+ this.emailid+" "+ this.deptno);
  }
}
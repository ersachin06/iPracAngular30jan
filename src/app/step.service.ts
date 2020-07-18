import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StepService {

  objUser:UserReg;
  constructor() { 
    this.objUser=new UserReg();
  }
  getObjUser()
  {
    return this.getObjUser();
  }
  setObjUser(objUser:UserReg)
  {
    this.objUser=objUser;
  }
  dispObjUser()
  {
    console.log(this.objUser);
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

}
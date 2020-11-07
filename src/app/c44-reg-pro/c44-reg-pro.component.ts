//import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";

import { ProServiceService } from '../pro-service.service';

@Component({
  selector: 'app-c44-reg-pro',
  templateUrl: './c44-reg-pro.component.html',
  styleUrls: ['./c44-reg-pro.component.css']
})
export class C44RegProComponent implements OnInit {

 
  public user:any;

   //One For Profile Picture
   userForm = new FormGroup({  
    id:new FormControl(''),  
    name:new FormControl('',[Validators.required, Validators.maxLength(50),Validators.minLength(2)]),
    lastName:new FormControl('',[Validators.required, Validators.maxLength(50),Validators.minLength(2)]),
    email:new FormControl('',[Validators.required, Validators.maxLength(50),Validators.minLength(3)]),
    gender:new FormControl(''),
    phoneNumber:new FormControl('',[Validators.required, Validators.maxLength(10),Validators.minLength(10),Validators.pattern(/^[6-9]\d{9}$/)]),
    bio:new FormControl(''),  
});

myFiles:string [] = [];
urlArray:any=[];
directUrl:boolean=true;
 imageUrl = 'http://localhost:8910/downloadFile/abcfilename2';
  //constructor(public toastr:ToastrService,private appService:ProServiceService) { }
  constructor(private appService:ProServiceService) { }
  ngOnInit() {
    this.getLoggerInUserDetails();
  }

  getLoggerInUserDetails(){
   
    //this.appService.getLoggerInUserDetails().subscribe(data=>{
      let data={user:{id:2,name:'deepak',lastName:'kumar',email:'d@d.com',gender:true,phoneNumber:'9998855566',bio:'biography aboutdeepak'}};
      this.user=data.user;
     this.userForm.patchValue(this.user);
      console.log(this.userForm.value);
     if(this.user.provider=='local')
      {
        this.directUrl=false;
      }
    //},error=>{
     // console.log('error');
   // });
  }


  onSelectFile(event){
    console.log(event)
    this.myFiles=[];
    this.urlArray=[];
   for (var i = 0; i < event.target.files.length; i++) { 
      if(event.target.files[i].size<=2048000)
      {
      this.myFiles.push(event.target.files[i]);
      
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[i]); // read file as data url
        
      reader.onload = (event) => { // called once readAsDataURL is completed

        this.urlArray.push(reader.result);
        }
      }
      else{
        alert("Please select image less than 2MB.Oops!");
        //this.toastr.error("Please select image less than 2MB.","Oops!");
      }
  }
  }



  submitForm(){
    if(this.userForm.invalid)
      {
        alert("Please Fill all the details Oops");
      //this.toastr.error("Please Fill all the details","Oops")
      }
    else{

      const categoryData = this.userForm.value;
          const formData = new FormData();
          formData.append('userString', JSON.stringify(categoryData));
          
          for (var i = 0; i < this.myFiles.length; i++) { 
              formData.append("file", this.myFiles[i]);
            }
            
      this.appService.updateUser(formData).subscribe(data=>{
        console.log("data",data);
      //this.user=data.user;
      this.user=data["user"];
     this.userForm.patchValue(this.user);
      //this.toastr.success("Profile Updated","Success");
      alert("profile updated ");
      this.urlArray=[];
     if(this.user.provider=='local')
      {
        this.directUrl=false;
      }
    },error=>{
      console.log('error');
    });
    }
  }


}

import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-c29rdf-run-time-validation',
  templateUrl: './c29rdf-run-time-validation.component.html',
  styleUrls: ['./c29rdf-run-time-validation.component.css']
})
export class C29rdfRunTimeValidationComponent implements OnInit {

  rForm:FormGroup;
  constructor(private fb:FormBuilder)
   {

  }

  ngOnInit()
  {
      this.rForm=this.fb.group(
        {
          "name" : ['deepak',Validators.required],
          "descriptions" : [null,Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(10)])],
          "validity":''
        }

      );

      this.rForm.get("validity").valueChanges.subscribe(validation=>

        {
          console.log(this.rForm.controls['name']+" ctrl name inside rform");
          console.log("validations : "+ validation);
          if(validation)
          {
            this.rForm.get("name").setValidators([Validators.required,Validators.minLength(3)]);
            // this.rForm.get("name").setValidators([Validators.minLength(3)]);
          }
          else{
            this.rForm.get("name").setValidators([Validators.required]);
          }

          this.rForm.get("name").updateValueAndValidity();
          
        });

       
  }

  addPost( data)
  {
    console.log(data);
  }

}

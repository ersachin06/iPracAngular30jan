
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
          "name" : [null,Validators.required],
          "descriptions" : [null,Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(10)])]
        }

      );
  }

  addPost( data)
  {
    console.log(data);
  }

}

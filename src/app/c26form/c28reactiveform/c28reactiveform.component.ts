import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
// import { validateConfig } from '@angular/router/src/config';


@Component({
  selector: 'app-c28reactiveform',
  templateUrl: './c28reactiveform.component.html',
  styleUrls: ['./c28reactiveform.component.css']
})
export class C28reactiveformComponent implements OnInit {

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
    alert("data is "+data);
    console.log(data);
  }

}

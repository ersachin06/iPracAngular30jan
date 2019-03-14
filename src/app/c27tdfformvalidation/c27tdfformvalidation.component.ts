import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c27tdfformvalidation',
  templateUrl: './c27tdfformvalidation.component.html',
  // styleUrls: ['./c27tdfformvalidation.component.css']
  styles:[
    '     input.ng-invalid{border-left:5px solid red;}   input.ng-valid{border-left:5px solid green;}  '
        ]
})
export class C27tdfformvalidationComponent implements OnInit {

  constructor() { }
  city :string;
  ngOnInit() {
  }
  add(data)
  {
    console.log(data);
    alert(data);
    alert(data["txtname"]);
    this.city=data["txtCity"];
    alert("city = "+ this.city);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c27tdfform',
  templateUrl: './c27tdfform.component.html',
  styleUrls: ['./c27tdfform.component.css']
})
export class C27tdfformComponent implements OnInit {

  constructor() { }
 
  formData:any;
  city :string;
  ngOnInit() {
  }
  add(data)
  {
    this.formData=data;
    console.log(data);
    alert(data); 
    alert(data["txtname"]);
    alert(data["txtHno"]);
    this.city=data["txtCity"];
    alert("city = "+ this.city);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c27tdfform',
  templateUrl: './c27tdfform.component.html',
  styleUrls: ['./c27tdfform.component.css']
})
export class C27tdfformComponent implements OnInit {

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

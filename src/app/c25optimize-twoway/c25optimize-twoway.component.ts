import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c25optimize-twoway',
  templateUrl: './c25optimize-twoway.component.html',
  styleUrls: ['./c25optimize-twoway.component.css']
})
export class C25optimizeTwowayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  str:string;
  fun(x:string)
  {
    this.str=x;
    alert("btn clicked "+ this.str);
  }
}

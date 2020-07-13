import { Component, OnInit } from '@angular/core';
import { Data1Service } from '../data1.service';

@Component({
  selector: 'app-c41consueservice2',
  templateUrl: './c41consueservice2.component.html',
  styleUrls: ['./c41consueservice2.component.css']
})
export class C41consueservice2Component implements OnInit {

  categories:any[];
  products:any[];
  constructor(private service: Data1Service) 
  { 
    //cer is generally used to inject services - 
  }

  ngOnInit() 
  {
    this.categories=this.service.getAllCategories();
    this.products=this.service.getAllProducts();
  }
}

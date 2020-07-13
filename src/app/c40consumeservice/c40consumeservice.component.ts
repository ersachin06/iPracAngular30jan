import { Component, OnInit } from '@angular/core';
import { Data1Service } from '../data1.service';

@Component({
  selector: 'app-c40consumeservice',
  templateUrl: './c40consumeservice.component.html',
  styleUrls: ['./c40consumeservice.component.css']
})
export class C40consumeserviceComponent implements OnInit {

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
  addRow()
  {
    
    let row={id:1,name:'laptop',desc:'description',img:'l1.jpg'};
    this.categories.push(row);
  }
}

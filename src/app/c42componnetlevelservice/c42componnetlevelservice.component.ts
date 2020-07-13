import { Component, OnInit } from '@angular/core';
import { Data2componentlevelService } from '../data2componentlevel.service';

@Component({
  selector: 'app-c42componnetlevelservice',
  templateUrl: './c42componnetlevelservice.component.html',
  styleUrls: ['./c42componnetlevelservice.component.css'],
  providers:[Data2componentlevelService]//COMPONNET LEVEL SERVICE REGISTARTION IS DONE HERE
})
export class C42componnetlevelserviceComponent implements OnInit {

  categories:any[]=[];
  constructor(private service:Data2componentlevelService) 
  { }

  ngOnInit() 
  {
    this.categories=this.service.getAllCategories();
  }
  addRow()
  {
    
    let row={id:1,name:'laptop',desc:'description',img:'l1.jpg'};
    this.categories.push(row);
  }

}

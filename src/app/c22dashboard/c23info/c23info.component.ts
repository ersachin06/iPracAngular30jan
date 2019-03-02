import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-c23info',
  templateUrl: './c23info.component.html',
  styleUrls: ['./c23info.component.css']
})
export class C23infoComponent implements OnInit {

  catId:any;

  constructor(private activatedRoute:ActivatedRoute)
  {
    console.log(this.activatedRoute.snapshot.params['id']);
    this.activatedRoute.params.subscribe(d=>{console.log(d);
    this.catId=d['id'];
  }
  )
  }
  categories:any[]=[
    {id:1,name:'laptop',desc:'description',img:'l1.jpg'},
    {id:2,name:'moblie',desc:'description',img:'m1.jpg'},
    {id:3,name:'shoes',desc:'description',img:'s1.jpg'},
    {id:4,name:'clothes',desc:'description',img:'c1.jpg'}
  ];

  ngOnInit() {
  }

}

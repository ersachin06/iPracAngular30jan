import { Component, OnInit } from '@angular/core';
import {AdminComponent}  from './admin/admin.component';
import {UserComponent} from './user/user.component';

@Component({
  selector: 'app-c25portal',
  templateUrl: './c25portal.component.html',
  styleUrls: ['./c25portal.component.css']
})
export class C25portalComponent implements OnInit {

  constructor() { }

  dynamicComponent=AdminComponent;
  ngOnInit() {
  }
  onBtnClick()
  {
  //  alert('btn clicked');
  this.dynamicComponent=UserComponent;
  }

}

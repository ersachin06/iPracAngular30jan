import { Component, OnInit } from '@angular/core';
import { intSlide1, ChandanService } from '../chandan.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-d39interval',
  templateUrl: './d39interval.component.html',
  styleUrls: ['./d39interval.component.css']
})
export class D39intervalComponent implements OnInit {

  x=Subscription;
  slide:intSlide1;
  slides:Array<intSlide1>=new Array();
  constructor(private service:ChandanService)
   { 
      this.slides.push({prodName:'laptop',imgName:'../../assets/images/l1.jpg'});
      this.slides.push({prodName:'Clothes',imgName:'../../assets/images/c1.jpg'});
      this.slides.push({prodName:'shoes',imgName:'../../assets/images/s1.jpg'});
      this.slides.push({prodName:'mobile',imgName:'../../assets/images/m1.jpg'});

   }


  ngOnInit() 
  {
    let cntr=1;
      this.service.obsSlide1().subscribe(
      it=>{
        this.slide=this.slides[cntr];
        cntr++;
        console.log(this.slide +" test work  ");
        if(cntr>=this.slides.length-1)
        {
          cntr=0;
        }
      }

     )    
  }

}

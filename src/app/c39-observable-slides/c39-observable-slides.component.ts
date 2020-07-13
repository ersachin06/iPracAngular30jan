import { Component, OnInit } from '@angular/core';
import { IntSlide, IcsdServiceService } from '../icsd-service.service';

@Component({
  selector: 'app-c39-observable-slides',
  templateUrl: './c39-observable-slides.component.html',
  styleUrls: ['./c39-observable-slides.component.css']
})
export class C39ObservableSlidesComponent implements OnInit {

  slide:IntSlide;
  slides:Array<IntSlide>=new Array();
  
  constructor(private service:IcsdServiceService)   
  { 
    this.slides.push({prodName:'books',imgName:'../../assets/images/b1.jpg'});
    this.slides.push({prodName:'shoes',imgName:'../../assets/images/s1.jpg'});
    this.slides.push({prodName:'laptop',imgName:'../../assets/images/l1.jpg'});
    this.slides.push({prodName:'clothes',imgName:'../../assets/images/c1.jpg'});

  }

  ngOnInit() 
  {
    let cntr=1;
    this.service.obsSlide().subscribe(
      it=>{
        this.slide=this.slides[cntr++];
        console.log(this.slide+" slide");
        if(cntr>=this.slides.length)
        {
          cntr=0;
        }
      }
    )
  }

}

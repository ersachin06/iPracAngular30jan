import { Component, OnInit } from '@angular/core';
import { ClsProduct } from './model/ClsProduct';

@Component({
  selector: 'app-c45-find-index',
  templateUrl: './c45-find-index.component.html',
  styleUrls: ['./c45-find-index.component.css']
})
export class C45FindIndexComponent implements OnInit {

  res:string;
  prodName:string;
  arrProductsGT20000:ClsProduct[];
  constructor() { }
  products:any[]=[
    {pid:1,catid:1,name:'dell',img:'l1.jpg',desc:'description',price:15000,qty:100,rating:5},
    {pid:2,catid:1,name:'sony vaio',img:'l2.jpg',desc:'description',price:25000,qty:150,rating:4},
    {pid:3,catid:2,name:'apple',img:'m1.jpg',desc:'description',price:35000,qty:200,rating:3},
    {pid:4,catid:2,name:'samsung',img:'m2.jpg',desc:'description',price:45000,qty:250,rating:2},
    {pid:5,catid:3,name:'nike',img:'s1.jpg',desc:'description',price:45000,qty:300,rating:1},
    {pid:6,catid:3,name:'woodland',img:'s2.jpg',desc:'description',price:65000,qty:400,rating:5},
    {pid:7,catid:4,name:'wrangler',img:'c1.jpg',desc:'description',price:75000,qty:450,rating:4},
    {pid:8,catid:4,name:'spykar',img:'c2.jpg',desc:'description',price:85000,qty:500,rating:3}
  ];

//For each
  funForEachLoop()
  {
    this.products.forEach((product:ClsProduct)=>{
      console.log(product.name+" "+ product.img+" "+ product.pid);
    })
  }

  //For (let val of array)-- value is value of key. ex - laptop, spykar
  funForOf_disp_values()
  {
    console.log("for of loop : ");
      for(let val of this.products)
      {
          console.log(val);
      }
  }
  //For (key in array)- key is property - ex name , pid
funForIn_disp_Keys()
{
  console.log("for in loop : ");
    for(let key in this.products)
    {
      console.log("key is  :"+key +" value is: "+ this.products[key].name);
    }
}
  //For loop
  funForLoopDispAllProducts()
  {
    for(let i=0;i<this.products.length;i++)
    {
      console.log(this.products[i]);
    }
  }
      //Reduce
      funSumOfAllProds()
      {

        // var objs = [
        //   {name: "Peter", age: 35},
        //   {name: "John", age: 27},
        //   {name: "Jake", age: 28}
        // ];
        
        // var res=objs.reduce(function(accumulator, currentValue) {
        //   return accumulator + currentValue.age;
        // }, 0); // 35 + 27 + 28 = 90
        // console.log(res);
        
         let res=this.products.reduce((ttl,currentVal:ClsProduct,index,arr)=>
         {
          //  console.log(ttl.price +" index is "+ index);
          //   //console.log(index+" "+ arr[index-1].pid+"  "+ currentVal.pid+" "+ currentVal.price+" "+ ttl.price);  
          //   ttl.price=ttl.price+currentVal.price;
         
          //  return ttl.price;
          console.log(ttl +" index is "+ index);
          //console.log(index+" "+ arr[index-1].pid+"  "+ currentVal.pid+" "+ currentVal.price+" "+ ttl);  
          console.log("price " +currentVal.price);
          ttl=ttl+currentVal.price;
       
         return ttl;
      
         },0) ;
         alert(res);
        console.log(res);
      }
      

  //findIndex();
    funFindIndexByProductName()
    {
      let index = this.products.findIndex(product => product.name === this.prodName);
      this.res="index of " + name + " is "+ index;
      console.log(index);
    }
    //IndexOf()
    arrIndexOf()
    {
      let arr = [ 5,10,15,20,25 ];    
      
      let val = arr.indexOf(15) 
         

      alert(val);

      let arr1 = [ 'a','b','c','a','e' ];  
  
      // use of indexOf() method  
      let val1 = arr1.indexOf('a',3) 
         

      alert(val1);
    }
    //map FUNCTION 
    funMapGetAllProductname()
    {
      let arrProdNames=this.products.map(function(product)
      {
        return product.name;
      });
      alert(arrProdNames);
    }
    //filter FUNCTION
    funFilterGetAllProductHavingPriceGT20000()
    {
      this.arrProductsGT20000=this.products.filter(function(product)
      {
        if(product.price>40000)
        {
          return product;
        }
      }); 
     
      console.log(this.arrProductsGT20000);
      console.log(this.arrProductsGT20000[0].name+" " +this.arrProductsGT20000[0].price);
      
    }
    
  ngOnInit(): void {
  }

}

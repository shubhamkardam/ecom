import { isNgTemplate } from '@angular/compiler';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface items{
  id:number,
  name:string,
  size:string,
  img:string,
  desc:string
}

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {

  @ViewChild('user', {static:true}) something:ElementRef;

  womenItems : items[] = [
    {
      id:1,
      name:'sling bag',
      size:'medium',
      img:'https://material.angular.io/assets/img/examples/shiba2.jpg',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nisi! Praesentium ea nostrum magni quis reiciendis assumenda expedita, cum quia quaerat debitis, soluta consectetur magnam impedit. Hic facilis ea eligendi.'
    },
    {
      id:2,
      name:'t-shirt',
      size:'small',
      img:'https://material.angular.io/assets/img/examples/shiba2.jpg',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nisi! Praesentium ea nostrum magni quis reiciendis assumenda expedita, cum quia quaerat debitis, soluta consectetur magnam impedit. Hic facilis ea eligendi.'
    }
  ];

  pipeexample = new Date();
  pipe2 = 20/100;

  menItems : items[] = [
    {
      id:1,
      name:'shirt1',
      size:'medium',
      img:'https://material.angular.io/assets/img/examples/shiba2.jpg',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nisi! Praesentium ea nostrum magni quis reiciendis assumenda expedita, cum quia quaerat debitis, soluta consectetur magnam impedit. Hic facilis ea eligendi.'
    },
    {
      id:2,
      name:'t-shir2',
      size:'small',
      img:'https://material.angular.io/assets/img/examples/shiba2.jpg',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nisi! Praesentium ea nostrum magni quis reiciendis assumenda expedita, cum quia quaerat debitis, soluta consectetur magnam impedit. Hic facilis ea eligendi.'
    },
    {
      id:3,
      name:'t-shirt3',
      size:'small',
      img:'https://material.angular.io/assets/img/examples/shiba2.jpg',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nisi! Praesentium ea nostrum magni quis reiciendis assumenda expedita, cum quia quaerat debitis, soluta consectetur magnam impedit. Hic facilis ea eligendi.'
    },
    {
      id:4,
      name:'t-shirt4',
      size:'small',
      img:'https://material.angular.io/assets/img/examples/shiba2.jpg',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nisi! Praesentium ea nostrum magni quis reiciendis assumenda expedita, cum quia quaerat debitis, soluta consectetur magnam impedit. Hic facilis ea eligendi.'
    }
  ]

  
    


  collectionName = '';
  mainList = [];
  sub;

  constructor(private activateRoute: ActivatedRoute) { 
    console.log("test1"+this.activateRoute.params)
    this.sub = this.activateRoute.params.subscribe(val=>{

      // console.log(this.activateRoute.params);
      if(val && val.name != '') {
        this.collectionName = val.name;
        this.mainList = [];
        this.init();
      }
    });
    
  }

  init(){
    if(this.collectionName !== '') {
      if(this.collectionName === 'men'){
        console.log("test")
        this.mainList = this.menItems;
      } else if(this.collectionName === 'women') {
        this.mainList = this.womenItems;
      } else {
        this.mainList = [];
      }
    }
  }

  del(id:number){
    const ind = this.mainList.findIndex(t => t.id == id);
    this.mainList.splice(ind,1)
  }

  ngOnInit(): void {
    
    
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

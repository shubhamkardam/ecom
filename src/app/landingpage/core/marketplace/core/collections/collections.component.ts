import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {

  menItems =[
    'shirt',
    't-shirt',
    'bags'
  ]

  womenItems = [
    'slingbags',
    'dresses',
    'rings'
  ];

  collectionName = '';
  mainList = [];
  sub:any;

  constructor(private activateRoute: ActivatedRoute) { 
    console.log("test1"+this.activateRoute.params)
    this.sub = this.activateRoute.params.subscribe(val=>{

      console.log(this.activateRoute.params);

      this.collectionName = val.name;
          this.mainList = [];
    });
    // if(this.activateRoute.params){

    // }
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy() {
  }

}

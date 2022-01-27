import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-collections-items',
  templateUrl: './collections-items.component.html',
  styleUrls: ['./collections-items.component.scss']
})
export class CollectionsItemsComponent implements OnInit {

  @Input() list:any;
  @Output() deleteitem = new EventEmitter();

  dateexample = new Date();

  constructor() { }

  delete(value:number){
    this.deleteitem.emit(value)
  }

  ngOnInit(): void {
  }

}

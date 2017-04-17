import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dc-collection-item',
  templateUrl: './dc-collection-item.component.html',
  styleUrls: ['./dc-collection-item.component.scss']
})
export class DcCollectionItemComponent implements OnInit {

	@Input('item') collectionItem
	@Input('index') collectionIndex
	@Output() closeRequest = new EventEmitter();

  constructor() { 
  }

  closeItem(){
  	this.closeRequest.emit(this.collectionIndex);
  }

  ngOnInit() {
  }

}

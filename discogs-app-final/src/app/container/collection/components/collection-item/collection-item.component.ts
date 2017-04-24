import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-collection-item',
  templateUrl: './collection-item.component.html',
  styleUrls: ['./collection-item.component.scss']
})
export class CollectionItemComponent implements OnInit {

	@Input() collectionItem;
	@Input() collectionIndex;
	@Output() closeRequest = new EventEmitter();

  constructor() {}

  closeItem(){
  	this.closeRequest.emit(this.collectionIndex);
  }

  ngOnInit() {}

}

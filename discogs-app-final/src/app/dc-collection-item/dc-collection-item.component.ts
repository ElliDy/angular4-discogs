import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dc-collection-item',
  templateUrl: './dc-collection-item.component.html',
  styleUrls: ['./dc-collection-item.component.scss']
})
export class DcCollectionItemComponent implements OnInit {

	@Input('item') collectionItem

  constructor() { 
  		console.log(this.collectionItem)
  }

  ngOnInit() {
  }

}

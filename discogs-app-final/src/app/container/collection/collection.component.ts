import { Component, OnInit } from '@angular/core';

import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

	collection: any[];
	toggle = {};

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getCollection()
      .subscribe(collection => {
        this.collection = collection;
      });
  }

  closeItem(index){
    this.toggle[index + 'item'] = !this.toggle[index + 'item']
  };

}

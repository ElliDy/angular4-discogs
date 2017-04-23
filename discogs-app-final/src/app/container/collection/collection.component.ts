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
    // this.collection = [
    //   {
    //     basic_information: {
    //       title: 'Tragedies Of A Plastic Soul Junkie',
    //       artists: [
    //         {
    //           name: 'Terrence Parker'
    //         }
    //       ],
    //       labels: [
    //         {
    //           name: '!K7 Records',
    //           catno: 'K7R007LP',
    //           entity_type_name: 'Label'
    //         }
    //       ]
    //     }
    //   }
    // ]
    this.dataService.getReleases()
      .subscribe(collection => {
        this.collection = collection;
      });
  }

  closeItem(index){
    this.toggle[index + 'item'] = !this.toggle[index + 'item']
  };

}

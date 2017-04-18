import { Component, OnInit } from '@angular/core';

import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-dc-collection',
  templateUrl: './dc-collection.component.html',
  styleUrls: ['./dc-collection.component.scss']
})
export class DcCollectionComponent implements OnInit {

	releases: any[];
	toggle = {};

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getReleases()
      .subscribe(releases => {
        this.releases = releases;
      });
  }

  closeItem(index){
    this.toggle[index+'item'] = !this.toggle[index+'item']
  };

}

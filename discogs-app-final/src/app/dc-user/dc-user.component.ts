import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dc-user',
  templateUrl: './dc-user.component.html',
  styleUrls: ['./dc-user.component.sass']
})
export class DcUserComponent implements OnInit {

	userInfo;

  constructor() { 
  	this.userInfo = {
			profile: "",
			wantlist_url: "https://api.discogs.com/users/soulunit/wants",
			seller_num_ratings: 0,
			rank: 25,
			num_pending: 0,
			id: 196524,
			buyer_rating: 0,
			num_for_sale: 0,
			home_page: "",
			location: "",
			collection_folders_url: "https://api.discogs.com/users/soulunit/collection/folders",
			username: "soulunit",
			collection_fields_url: "https://api.discogs.com/users/soulunit/collection/fields",
			releases_contributed: 5,
			registered: "2006-08-03T06:55:01-07:00",
			rating_avg: 0,
			num_collection: 400,
			releases_rated: 0,
			curr_abbr: "EUR",
			seller_rating_stars: 0,
			num_lists: 0,
			name: "",
			buyer_rating_stars: 0,
			num_wantlist: 0,
			inventory_url: "https://api.discogs.com/users/soulunit/inventory",
			uri: "https://www.discogs.com/user/soulunit",
			buyer_num_ratings: 0,
			avatar_url: "https://secure.gravatar.com/avatar/6680d6c5379fb9d1a5ca5a56c837c806?s=500&r=pg&d=mm",
			resource_url: "https://api.discogs.com/users/soulunit",
			seller_rating: 0
		}
  }

  ngOnInit() {
  }

}

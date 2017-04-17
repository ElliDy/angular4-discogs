import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dc-collection',
  templateUrl: './dc-collection.component.html',
  styleUrls: ['./dc-collection.component.scss']
})
export class DcCollectionComponent implements OnInit {

	collection = [];
	toggle = {};

	closeItem = function(index){
		this.toggle[index+'item'] = !this.toggle[index+'item']
	}

  constructor() { 
		this.collection = [{
			collection_id: 26193956,
			release_id: 29808,
			rating: 0,
			basic_information: {
				labels: [{
					name: "!K7 Records",
					entity_type: "1",
					catno: "K7R007LP",
					resource_url: "https://api.discogs.com/labels/29377",
					id: 29377,
					entity_type_name: "Label"
				}],
				formats: [{
					descriptions: [
						"LP",
						"Album"
					],
					name: "Vinyl",
					qty: "2"
				}],
				thumb: "",
				title: "Tragedies Of A Plastic Soul Junkie",
				artists: [{
					join: "",
					name: "Terrence Parker",
					anv: "",
					tracks: "",
					role: "",
					resource_url: "https://api.discogs.com/artists/119",
					id: 119
				}],
				resource_url: "https://api.discogs.com/releases/29808",
				year: 1996,
				id: 29808
			},
			date_added: "2009-08-20T00:00:00-07:00"
		},
		{
			collection_id: 26194097,
			release_id: 79026,
			rating: 0,
			basic_information: {
				labels: [{
						name: "~scape",
						entity_type: "1",
						catno: "15 cd",
						resource_url: "https://api.discogs.com/labels/1495",
						id: 1495,
						entity_type_name: "Label"
					},
					{
						name: "~scape",
						entity_type: "1",
						catno: "sc 15cd",
						resource_url: "https://api.discogs.com/labels/1495",
						id: 1495,
						entity_type_name: "Label"
					}
				],
				formats: [{
					descriptions: [
						"Album"
					],
					name: "CD",
					qty: "1"
				}],
				thumb: "",
				title: "Wild Life Documentaries",
				artists: [{
					join: "",
					name: "Deadbeat",
					anv: "",
					tracks: "",
					role: "",
					resource_url: "https://api.discogs.com/artists/15056",
					id: 15056
				}],
				resource_url: "https://api.discogs.com/releases/79026",
				year: 2002,
				id: 79026
			},
			date_added: "2009-08-20T00:00:00-07:00"
		},
		{
			collection_id: 26193937,
			release_id: 24836,
			rating: 0,
			basic_information: {
				labels: [{
					name: "7th City",
					entity_type: "1",
					catno: "SCD 003",
					resource_url: "https://api.discogs.com/labels/70",
					id: 70,
					entity_type_name: "Label"
				}],
				formats: [{
					descriptions: [
						"12",
						"33 ⅓ RPM",
						"EP"
					],
					name: "Vinyl",
					qty: "1"
				}],
				thumb: "",
				title: "Multiplexor",
				artists: [{
					join: ",",
					name: ".xtrak",
					anv: "",
					tracks: "",
					role: "",
					resource_url: "https://api.discogs.com/artists/3628",
					id: 3628
				}],
				resource_url: "https://api.discogs.com/releases/24836",
				year: 1995,
				id: 24836
			},
			date_added: "2009-08-20T00:00:00-07:00"
		},
		{
			collection_id: 26193861,
			release_id: 2974,
			rating: 0,
			basic_information: {
				labels: [{
					name: "83 West Records",
					entity_type: "1",
					catno: "ET-003",
					resource_url: "https://api.discogs.com/labels/82",
					id: 82,
					entity_type_name: "Label"
				}],
				formats: [{
					descriptions: [
						"12",
						"33 ⅓ RPM",
						"EP"
					],
					name: "Vinyl",
					qty: "1"
				}],
				thumb: "",
				title: "Platforms E.P.",
				artists: [{
					join: "",
					name: "DJ Sneak",
					anv: "",
					tracks: "",
					role: "",
					resource_url: "https://api.discogs.com/artists/170",
					id: 170
				}],
				resource_url: "https://api.discogs.com/releases/2974",
				year: 1995,
				id: 2974
			},
			date_added: "2009-08-20T00:00:00-07:00"
		},
		{
			collection_id: 26193911,
			release_id: 16103,
			rating: 0,
			basic_information: {
				labels: [{
					name: "83 West Records",
					entity_type: "1",
					catno: "ET-007",
					resource_url: "https://api.discogs.com/labels/82",
					id: 82,
					entity_type_name: "Label"
				}],
				formats: [{
					descriptions: [
						"12",
						"EP",
						"33 ⅓ RPM"
					],
					name: "Vinyl",
					qty: "1"
				}],
				thumb: "",
				title: "Deep State E.P.",
				artists: [{
					join: "",
					name: "Johnny Fiasco",
					anv: "",
					tracks: "",
					role: "",
					resource_url: "https://api.discogs.com/artists/255",
					id: 255
				}],
				resource_url: "https://api.discogs.com/releases/16103",
				year: 1995,
				id: 16103
			},
			date_added: "2009-08-20T00:00:00-07:00"
		},
		{
			collection_id: 26194002,
			release_id: 42374,
			rating: 0,
			basic_information: {
				labels: [{
					name: "83 West Records",
					entity_type: "1",
					catno: "ET-008",
					resource_url: "https://api.discogs.com/labels/82",
					id: 82,
					entity_type_name: "Label"
				}],
				formats: [{
					descriptions: [
						"12",
						"EP",
						"33 ⅓ RPM"
					],
					name: "Vinyl",
					qty: "1"
				}],
				thumb: "",
				title: "The S.O.B. E.P. (Straight Outta Brooklyn)",
				artists: [{
					join: "",
					name: "Mike Delgado",
					anv: "",
					tracks: "",
					role: "",
					resource_url: "https://api.discogs.com/artists/14846",
					id: 14846
				}],
				resource_url: "https://api.discogs.com/releases/42374",
				year: 1996,
				id: 42374
			},
			date_added: "2009-08-20T00:00:00-07:00"
		},
		{
			collection_id: 26194145,
			release_id: 177151,
			rating: 0,
			basic_information: {
				labels: [{
					name: "99 North",
					entity_type: "1",
					catno: "99 NTH 1",
					resource_url: "https://api.discogs.com/labels/4368",
					id: 4368,
					entity_type_name: "Label"
				}],
				formats: [{
					descriptions: [
						"12",
						"33 ⅓ RPM"
					],
					name: "Vinyl",
					qty: "1"
				}],
				thumb: "",
				title: "Taster",
				artists: [{
					join: "",
					name: "Various",
					anv: "",
					tracks: "",
					role: "",
					resource_url: "https://api.discogs.com/artists/194",
					id: 194
				}],
				resource_url: "https://api.discogs.com/releases/177151",
				year: 1995,
				id: 177151
			},
			date_added: "2009-08-20T00:00:00-07:00"
		},
		{
			collection_id: 26194224,
			release_id: 1142122,
			rating: 0,
			basic_information: {
				labels: [{
					name: "99 Records",
					entity_type: "1",
					catno: "1601",
					resource_url: "https://api.discogs.com/labels/4738",
					id: 4738,
					entity_type_name: "Label"
				}],
				formats: [{
					descriptions: [
						"Album",
						"Reissue"
					],
					name: "CD",
					qty: "1"
				}],
				thumb: "",
				title: "Cool Beauty",
				artists: [{
					join: ",",
					name: "O.M.U.",
					anv: "Organized Multi Unit",
					tracks: "",
					role: "",
					resource_url: "https://api.discogs.com/artists/78832",
					id: 78832
				}],
				resource_url: "https://api.discogs.com/releases/1142122",
				year: 1996,
				id: 1142122
			},
			date_added: "2009-08-20T00:00:00-07:00"
		},
		{
			collection_id: 26193951,
			release_id: 27865,
			rating: 0,
			basic_information: {
				labels: [{
					name: "99 Records",
					entity_type: "1",
					catno: "2123",
					resource_url: "https://api.discogs.com/labels/4738",
					id: 4738,
					entity_type_name: "Label"
				}],
				formats: [{
					descriptions: [
						"Album"
					],
					name: "CD",
					qty: "1"
				}],
				thumb: "",
				title: "Potential Meeting",
				artists: [{
					join: "",
					name: "Silent Poets",
					anv: "",
					tracks: "",
					role: "",
					resource_url: "https://api.discogs.com/artists/3492",
					id: 3492
				}],
				resource_url: "https://api.discogs.com/releases/27865",
				year: 1994,
				id: 27865
			},
			date_added: "2009-08-20T00:00:00-07:00"
		},
		{
			collection_id: 26194188,
			release_id: 639998,
			rating: 0,
			basic_information: {
				labels: [{
					name: "99 Records",
					entity_type: "1",
					catno: "2139",
					resource_url: "https://api.discogs.com/labels/4738",
					id: 4738,
					entity_type_name: "Label"
				}],
				formats: [{
					name: "CD",
					qty: "1"
				}],
				thumb: "",
				title: "Organized Multi Unit",
				artists: [{
					join: "",
					name: "O.M.U.",
					anv: "O M U",
					tracks: "",
					role: "",
					resource_url: "https://api.discogs.com/artists/78832",
					id: 78832
				}],
				resource_url: "https://api.discogs.com/releases/639998",
				year: 1995,
				id: 639998
			},
			date_added: "2009-08-20T00:00:00-07:00"
		}
		]

  }

  ngOnInit() {
  }

}

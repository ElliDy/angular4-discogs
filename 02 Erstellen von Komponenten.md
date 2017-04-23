# Erstellen von Komponenten

In diesem Teil des Tutorials soll es nun darum gehen Komponenten mit Hilfe von angular-cli zu erstellen und zu bearbeiten.
Statische Daten werden später über einen Service und einen Lokalen Server eingebunden. Wir wollen zwei Komponenten darstellen. Zum einen soll es eine Seite geben, wo man sich Informationen zu einem Nutzer abrufen kann
([Nutzerinfos von ...](https://api.discogs.com/users/userName)). Zum anderen soll die Sammlung von dem Nutzer angezeigt werden können ([Sammlungen von ...](https://api.discogs.com/users/userName/collection)).

Um eine Komponente mit angular-cli zu erstellen, benutzt man folgendes Kommando:

`ng generate component` + name der Komponente

Wir erstellen nun 3 Komponenten.

`ng generate component container/home`

`ng generate component container/user`

`ng generate component container/collection`

Hierdurch wird ein Ordner erstellt, der die erforderlichen Dateien der Komponente erhält und gleichzeitig wird die Komponente dem AppModule hinzugefügt.

Nun müssen wir noch zu den Komponenten navigieren können. Hierzu fügen wir die Pfade in unserem Routing-Modul ein.

```
{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
},
{
    path: 'home',
    component: HomeComponent 
},
{
    path: 'user',
    component: UserComponent 
},
{
    path: 'collection',
    component: CollectionComponent 
}
```

Diese verweisen auf unsere Komponenten. Hierbei ist es wichtig, dass die Komponenten auch importiert werden.

`import { HomeComponent } from './container/home/home.component';`

`import { UserComponent } from './container/user/user.component';`

`import { CollectionComponent } from './container/collection/collection.component';`

Nun müssen wir an der Stelle, wo der Inhalt der gerouteten Komponenten dargestellt wird, noch eine Navigation einfügen. Diese könnte innerhalb der app.component.html so aussehen.

```
<nav class="nav">
    <a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
    <a class="nav-link" routerLink="/user" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">User</a>
    <a class="nav-link" routerLink="/collection" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Collection</a>
</nav>
<router-outlet></router-outlet>
```

## User

Innerhalb der Komponente können wir nun ein Attribute userInfo anlegen..

```
userInfo: any;

ngOnInit() {
  this.userInfo = {
    username: 'Horst',
    description: '...'
  }
}
```

Im Template kann jetzt auf beliebige Felder zugegriffen werden. Ein Beispiel, wie das Template aussehen könnte, ist folgendes:

```
<h2>{{ userInfo.username }}</h2>
<p>
  Beschreibung: {{ userInfo.description }}
</p>
```

## Sammlung eines Nutzer

Die gleiche Vorgehensweise soll nun für die Sammlung angewendet werden. Dazu soll als erstes nur eine Liste angezeigt werden. Im nächsten Teil des Tutorials werden wir dann einzelne Items anzeigen.

Als vorerst dummy liste dient uns folgende:

```
collection: any[];

ngOnInit() {
  this.collection = [
    {
      basic_information: {
        title: 'Tragedies Of A Plastic Soul Junkie',
        artists: [
          {
            name: 'Terrence Parker'
          }
        ],
        labels: [
          {
            name: '!K7 Records',
            catno: 'K7R007LP',
            entity_type_name: 'Label'
          }
        ]
      }
    }
  ]
}
```

Um eine Liste in Angular zur rendern benutzt man das Attribut *ngFor.

```
<ul>
  <li class="p-1" *ngFor="let item of collection; let i = index">
    {{ item['basic_information'].title }}
  </li>
</ul>
```

## Details einer Sammlung anzeigen

Nun wollen wir Details einer Sammlung anzeigen, wenn wir auf einen Eintrag der Sammlung Klicken. Der Einfachheit halber werden wir dies noch nicht ins Routing integrieren, sondern über das Attribut ngIf* den jeweiligen View ausblenden.

Als erstes brauchen wir eine neue Komponente.

`ng generate component container/collection/components/collection-item`

Diese Komponente nutzen wir als Item-Komponente und sie muss von der CollectionComponent Daten entgegennehmen, die sie darstellen will.

Man fügt hierzu ein Attribut mit der Annotation Input der Klasse hinzu.

`@Input() collectionItem;`

Nun muss diese Komponente in der Eltern-Komponente genutzt werden. Dazu fügen wir in collection.component.html folgende Zeilen innerhalb unseres ListItems hinzu.

```
<ul class="list-unstyled">
  <li class="p-1" *ngFor="let item of collection; let i = index">
    <button
      type="button"
      class="btn btn-primary">
      {{ i + 1 }}. {{ item['basic_information'].title }}
    </button>
    <app-collection-item
      [collectionItem]="item['basic_information']"
      [collectionIndex]="i">
    </app-collection-item>
  </li>
</ul>
```

Hierbei wird nun die Basisinformation als Item an unser CollectionItemComponent übergeben. Nun werden noch alle Informationen untereinander angezeigt.

Um dies zu ändern bauen wir ein Toggle ein.

```
<ul class="list-unstyled ">
  <li class="p-1" *ngFor="let item of collection; let i = index">
    <button
        type="button"
        *ngIf="!toggle[i + 'item']"
        class="btn btn-primary"
        (click)="toggle[i + 'item']=!toggle[i + 'item']" >
        {{ i + 1 }}. {{ item['basic_information'].title }}
    </button>
    <app-collection-item
        *ngIf="toggle[i + 'item']"
        [collectionItem]="item['basic_information']"
        [collectionIndex]="i">
    </app-collection-item>
  </li>
</ul>
```

Wenn auf eines der beiden Items (Toggle Button aus der Übersicht oder Schliessen Button in den Detailinformationen) geklickt wird, wird das Toggle-Item, welches an ein Attribut gebunden ist, welches wir vorher noch in der Klasse initialisieren müssen (`toggle = {};`), invertiert. Dadurch kann im *ngIf genau dieses Toggle abgefragt werden und somit nur eine der beiden Informationen angezeigt werden.

## Eine Funktion als Output übergeben

Die Schließen-Aktion wird in unserer CollectionItemComponent getriggert, aber verändern müssen wir das Toggle-Objekt der CollectionComponent. Um dies zu realisieren wird in Angular die Output-Annotation verwendet. Hierbei wird ein EventEmitter erzeugt, auf dem dann bei einem Click ein emit mit dem Index ausgeführt wird.
Die übergebene Funktion erhält das Emit-Event und wird in der Elternkomponente ausgeführt.

Konkret sieht das in der CollectionItemComponent dann so aus.

```
Komponente:
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

Template:
<div class="card">
  <div class="card-block">
    <div class="card-title">
      <ul class="list-inline">
        <li class="list-inline-item" *ngFor="let artist of collectionItem.artists; let i = index; let l = last">
          {{ !l ? artist.name + ', ' : artist.name }}
        </li>
      </ul>
      {{ collectionItem.title }}
    </div>
  </div>
  <ul class="list-group list-group-flush">
	  <li
      class="list-group-item"
      *ngFor="let label of collectionItem.labels">
      <div class="d-flex w-100 justify-content-between">
        <div>
          {{ label.entity_type_name }}: {{ label.name }}
        </div>
        <small>catno: {{ label.catno }}</small>
      </div>
	  </li>
  </ul>
  <div class="card-block">
    <button
      class="btn btn-primary"
      (click)="closeItem()">
      Close
    </button>
  </div>
</div>
```

Und in der CollectionComponent wie folgt:

```
Komponente:
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
        this.dataService.getReleases()
        .subscribe(collection => {
            this.collection = collection;
        });
    }

    closeItem(index){
        this.toggle[index + 'item'] = !this.toggle[index + 'item']
    };
}

Template:
<ul class="list-unstyled">
  <li class="p-1" *ngFor="let item of collection; let i = index">
    <button
      type="button"
      *ngIf="!toggle[i + 'item']"
      class="btn btn-primary"
      (click)="toggle[i + 'item']=!toggle[i+'item']" >
      {{ i + 1 }}. {{ item['basic_information'].title }}
    </button>
    <app-collection-item
      *ngIf="toggle[i + 'item']"
      [collectionItem]="item['basic_information']"
      [collectionIndex]="i"
      (closeRequest)="closeItem($event)">
    </app-collection-item>
  </li>
</ul>
```

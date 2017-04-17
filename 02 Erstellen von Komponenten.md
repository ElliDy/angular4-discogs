# Erstellen von Komponenten

In diesem Teil des Tutorials soll es nun darum gehen Komponenten mit Hilfe von angular-cli zu erstellen und zu bearbeiten.
Es wird später die discogs-api eingebunden. Deswegen verwenden wir schon jetzt Elemente aus dieser Musik-Bibliothek. Wir wollen zwei Komponenten darstellen. Zum einen soll es eine Seite geben, wo man sich Informationen zu einem Nutzer abrufen kann
([Nutzerinfos von soulunit](https://api.discogs.com/users/soulunit)). Zum anderen sollen die Sammlungen von dem Nutzer angezeigt werden können ([Sammlungen von soulunit](https://api.discogs.com/users/soulunit/collection)).

## Nutzerinfo

Um eine Komponente mit angular-cli zu erstellen, benutzt man folgendes Kommando:

`ng generate component dc-user`

Hierdurch wird ein Ordner erstellt, der die erforderlichen Dateien der Komponente erhält und gleichzeitig wird die Komponente in dem AppModule hinzugefügt.

Innerhalb der Komponente können wir nun ein Attribute userInfo anlegen und diesem das Objekt aus der API zuweisen (`this.userInfo = {}`). 

Im Template kann jetzt auf beliebige Felder zugegriffen werden. Ein Beispiel, wie das Template aussehen könnte, ist folgendes:

```
<h2>{{userInfo.username}}</h2>
<p>
  Rang: {{userInfo.rank}}
</p>
<p>
  Homepage: <a href="{{userInfo.homepage}}">{{userInfo.homepage}}</a>
</p>
<img height="200" width="200" src="{{userInfo.avatar_url}}"> 
```

Nun müssen wir noch zu der Komponente navigieren können. Hierzu fügen wir einen neuen Pfad in unserem Routing-Modul ein.

```
    {
        path: 'user/soulunit',
        component: DcUserComponent 
    }
```

Dieser verweist auf unsere Komponente. Hierbei ist es wichtig, dass diese Komponente auch importiert wird.

`import { DcUserComponent } from './dc-user/dc-user.component';`

Nun müssen wir an der Stelle, wo der Inhalt der gerouteten Komponenten dargestellt wird, noch eine Navigation einfügen. Diese könnte innerhalb der app.component.html so aussehen.

```
<nav>
    <a routerLink="/discogs" routerLinkActive="active">Home</a>
    <a routerLink="/user/soulunit" routerLinkActive="active">User SoulUnit</a>
</nav>
<router-outlet></router-outlet>
```

## Liste der Sammlungen eines Nutzer

Die gleiche Vorgehensweise soll nun für die Sammlungen angewendet werden. Hierbei sollen die ersten 10 Items dargestellt werden. Dazu soll als erstes nur eine Liste angezeigt werden. Im nächsten Teil des Tutorials werden wir dann einzelne Items anzeigen.

Um eine Liste in Angular zur rendern benutzt man das Attribut *ngFor.

```
<li *ngFor="let item of collection; let i = index;">+
    {{item['basic_information'].title}}
</li>
```

## Details einer Sammlung anzeigen

Nun wollen wir Details einer Sammlung anzeigen, wenn wir auf eine Sammlung Klicken. Der Einfachheit halber werden wir dies noch nicht ins Routing integrieren, sondern über das Attribut ngIf* den jeweiligen View ausblenden.

Als erstes brauchen wir eine neue Komponente.

`ng generate component dc-collection-item`

Diese Komponente nutzen wir als Item-Komponente und sie muss von der DcCollectionComponent Daten entgegennehmen, die sie darstellen will.

Man fügt hierzu ein Attribut mit der Annotation Input der Klasse hinzu.

`@Input('item') collectionItem`

Nun muss diese Komponente in der Eltern-Komponente genutzt werden. Dazu fügen wir in dc-collection.component.html folgende Zeilen innerhalb unseres ListItems hinzu.

```
<span>{{i+1}}. {{item['basic_information'].title}}</span>
<app-dc-collection-item [item]="item['basic_information']"><app-dc-collection-item>
```

Hierbei wird nun die Basisinformation als Item an unser DcCollectionItemComponent übergeben. Nun werden noch alle Informationen untereinander angezeigt.

Um dies zu ändern bauen wir ein Toggle ein.

```
<span *ngIf="!toggle[i+'item']" (click)="toggle[i+'item']=!toggle[i+'item']">
    {{i+1}}. {{item['basic_information'].title}}
</span>
<app-dc-collection-item (click)="toggle[i+'item']=!toggle[i+'item']" 
    *ngIf="toggle[i+'item']" [item]="item['basic_information']"></app-dc-collection-item>
```

Wenn auf eines der beiden Items (Titel aus der Übersicht oder Detailinformationen) geklickt wird, wird das Toggle-Item, welches an ein Attribut gebunden ist, welches wir vorher noch in der Klasse initialisieren müssen (`toggle = {};`), invertiert. Dadurch kann im *ngIf genau dieses Toggle abgefragt werden und somit nur eine der beiden Informationen angezeigt werden.

## Eine Funktion als Output übergeben

Nun wäre es noch ganz schön, wenn wir beim Schließen der Details nicht immer auf den gesamten Eintrag klicken müssen, sondern noch einen Schließen-Button hätten. Folglich wird die Schließen-Aktion in unserer DcCollectionItemComponent getriggert, aber verändern müssen wir dann das Toggle-Objekt der DcCollectionComponent. Um dies zu realisieren wird in Angular die Output-Annotation verwendet. Hierbei wird ein EventEmitter erzeugt, auf dem dann bei einem Click ein emit mit dem Index ausgeführt wird.
Die übergebene Funktion erhält das Emit-Event und wird in der Elternkomponente ausgeführt.

Konkret sieht das in der DcCollectionItemComponent dann so aus.

```
Komponente:
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

    closeItem(){
        this.closeRequest.emit(this.collectionIndex);
    }
}

Template:
<span (click)="closeItem()" class="closeButton">x</span>
```

Und in der DcCollectionComponent muss folgendes hinzugefügt werden:

```
Komponente:
closeItem = function(index){
    this.toggle[index+'item'] = !this.toggle[index+'item']
}
Template:
<app-dc-collection-item [index]="i" (closeRequest)="closeItem($event)"
    *ngIf="toggle[i+'item']" [item]="item['basic_information']"></app-dc-collection-item>
```

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

``
<h2>{{userInfo.username}}</h2>
<p>
  Rang: {{userInfo.rank}}
</p>
<p>
  Homepage: <a href="{{userInfo.homepage}}">{{userInfo.homepage}}</a>
</p>
<img height="200" width="200" src="{{userInfo.avatar_url}}"> 
``

Nun müssen wir noch zu der Komponente navigieren können. Hierzu fügen wir einen neuen Pfad in unserem Routing-Modul ein.

``
    {
        path: 'user/soulunit',
        component: DcUserComponent 
    }
``

Dieser verweist auf unsere Komponente. Hierbei ist es wichtig, dass diese Komponente auch importiert wird.

`import { DcUserComponent } from './dc-user/dc-user.component';`

Nun müssen wir an der Stelle, wo der Inhalt der gerouteten Komponenten dargestellt wird, noch eine Navigation einfügen. Diese könnte innerhalb der app.component.html so aussehen.

``
<nav>
    <a routerLink="/discogs" routerLinkActive="active">Home</a>
    <a routerLink="/user/soulunit" routerLinkActive="active">User SoulUnit</a>
</nav>
<router-outlet></router-outlet>
``

## Liste der Sammlungen eines Nutzer

Die gleiche Vorgehensweise soll nun für die Sammlungen angewendet werden. Hierbei sollen die ersten 10 Items dargestellt werden. Dazu soll als erstes nur eine Liste angezeigt werden. Im nächsten Teil des Tutorials werden wir dann einzelne Items anzeigen.

Um eine Liste in Angular zur rendern benutzt man das Attribut *ngFor.

```
<li *ngFor="let item of collection; let i = index;">+
    {{item['basic_information'].title}}
</li>
```

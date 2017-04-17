# First Steps

## Installation von Angular CLI

Vorraussetzungen:
* node version 6.10.2
* npm package manager 3.7.3

Nun kann angular cli installiert werden:

'npm install -g @angular/cli'

## Erstellen eines Projekts

Im nächsten Schritt wollen wir mit Hilfe von angular 2 ein Projekt erstellen. Hierbei wollen wir gleich ein routing mit erstellen und den Style auf SASS festlegen.

'ng new discogs-app --routing=true --style=scss'

Das dauert nun einen kleinen Moment, da er auch alle Abhängigkeiten mit läd.

Nun haben wir ein Projekt mit folgender Projekt Struktur

* discogs-app
	* e2e
	* src
		* app
		* assets
		* environments
		* index.html
		* main.ts
		* styles.scss

Im e2e Ordner werden automatisch End-To-End-Tests generiert, die mit Hilfe von protractor ausgeführt werden können. Das Thema werden wir in diesem Tutorial jedoch nicht anschneiden. Wer sich darüber genauer informieren will, dem  sei folgende Seite ans Herz geleget:
[Getting Started with Angular 2 E2E Testing](https://blog.jscrambler.com/getting-started-with-angular-2-end-to-end-testing/).

Der für uns wichtige Ordner ist der src-ordner. Hier finden wir den Startpunkt jeder Webseite, die index.html. Eine zugehörige main.ts als Startpunkt für´s Scripting und die styles.scss, die den allgemeinen Style der Anwendung beschreibt. Hier benutze ich bewusst das Wort allgemein, weil jede Komponente ihren eigene Style verwalten kann, der dann auch nur in dieser Komponente vorhanden ist. Dazu aber später mehr.
Damit wir mehrere Style-Datein anlegen können, ändern wir hier noch schnell die Konfiguration.

Wir legen einen Ordner styles in src an und verschieben die Datei styles.scss dort hinein. Anschließend gehen wir in die Datei angular-cli.json, die im Root-Verzeichnis liegt, und ändern dort die Zeile 21 in '"styles/styles.scss"'. 

Nun können wir die Anwendung mit 'ng serve' ausgeführt im root-Ordner starten.

Unter 'http://localhost:4200' sollte nun ein "App Works" auftauchen.

Im folgenden wird nun kurz beschrieben, wie die Anwendung aufgebaut ist, damit wir diesen Text im Browser zu sehen bekommen.
Schauen wir in den app-Ordner unter source, finden wir ein Modul, eine Komponente (bestehend aus 4 Dateien) und ein Routing-Modul. 

### Module

Beginnen wir mit dem Modul. Hier sieht man in der Strukutr eine Klasse AppModule, die mit einer Annotation versehen ist, die diese Klasse als AngularModul kennzeichnet. Hier können wir jetzt noch verschiedene Konfigurationen mitgeben. Das Modul hat eine Komponente (AppComponent) und importiert weitere Module, die dann von anderen Modulen bzw. Komponenten genutzt werden können. Weiterhin wird die eine Komponente noch gebootstrapt und es gibt eine Eigenschaft providers, in der z.B. Services injeziert werden können. Dazu später mehr. 

### Komponenten

Die Komponente ist genauso eine Klasse wie das Modul, wird aber mit einer anderen Annotation versehen. Auch hier werden der Annotation Eigenschaften übergeben. In diesem Fall ein selector, der den Tag für das HTML spezifiziert, und ein templateUrl, die das Template, welches durch diese Komponente gerendert werden soll, angibt. Weiterhin können noch style urls festgelegt werden. Wie schon vorhin erwähnt, gelten diese Styles nur für die Komponente.

Ein kleines Beispiel dazu. Fügen wir in der index.html eine Überschrift "Discogs App" ein und setzen in der app.component.scss einen Style, der die Schriftfarbe eines h1-Elements auf bspw. Grün setzt. Nun sollte nur die Überschrift der Komponente diese Schriftfarbe annehmen, nicht aber die außerhalb unserer Anwendung.

### Routing

Die letzte generierte Datei bildet das RoutingModul, welches auch wiederum durch ein NgModule-Annotation gekennzeichnet ist. Auch dieses importiert bzw. exportiert ein RouterModule, welches das Angular Routing ermöglicht.
An das importierte Modul wird noch eine Konstante übergeben, welche die Konfiguration des Routings darstellt. Hierbei wird ein path und deren Kinder angegeben. Diese sind noch leer. 
Verändern wir die Routenkonfiguration zu folgender, sollte nun auch der Pfad discogs funktionieren.

''
  {
    path: 'discogs',
    children: []
  },
  { path: '',
    redirectTo: '/discogs',
    pathMatch: 'full'
  }
''
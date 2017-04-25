# Voraussetzungen

## Lokaler JSON-Server

`npm install json-server --save-dev`

## db.json

Inhalt aus Repo kopieren.

## routes.json

```
{
  "/api/": "/"
}
```

## NPM Script

`"server": "json-server --routes routes.json --watch db.json"`

# Erstellen von Modulen

Laut dem Angular Styleguide wird angeraten Services innerhalb eines [CoreModule](https://angular.io/docs/ts/latest/guide/ngmodule.html#!#core-module) anzulegen und das importieren dieses Moduls auf das `AppModule` zu beschränken.

## CoreModule

`ng g module core`

`CoreModule` in `AppModule` importieren und registrieren.

```
import { CoreModule } from './core/core.module';

imports: [
    ...
    CoreModule,
    ...
]
```

# Erstellen von Services

## DataService

`ng g service core/services/data`

Service im CoreModule importieren und registrieren.

```
import { DataService } from './services/data.service';

providers: [
    DataService
]
```
Service:

```
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  baseUrl: string = 'http://localhost:3000';

  constructor(private http: Http) {}

  getCollection(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/collection`)
      .map((response: Response) => {
        return response.json();
      })
  }

}
```

## Ersetzen der Statischen Daten

Nun wollen wir die statischen daten in der `collection.component.ts` durch einen service ersetzen.

### Service importieren

```
...

import { DataService } from '../../core/services/data.service';

...

ngOnInit() {
    this.dataService.getCollection()
        .subscribe(collection => {
            this.collection = collection;
        });
}
```

# Noch Zeit?

* Bootstrap integrieren
* Auslagern der Navigation in [SharedModule](https://angular.io/docs/ts/latest/guide/ngmodule.html#!#shared-module) ...

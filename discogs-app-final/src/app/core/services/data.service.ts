import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  baseUrl: string = 'http://localhost:3000';

  constructor(private http: Http) {}

  getReleases(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/collection`)
      .map((response: Response) => {
        return response.json();
      })
  }

}

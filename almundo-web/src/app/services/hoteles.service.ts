import { Http, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Config } from '../models/config';

@Injectable()
export class HotelesService {

  private url: string;

  constructor(private _http: Http) {
    this.url = Config.API_HOTEL;
  }

  getHoteles(name, stars) {
    let search = new URLSearchParams();

    if (name) {
      search.set('name', name);
    }if (stars) {
      search.set('stars', stars);
    }
    return this._http.get(this.url + 'hoteles', { search: search }).map(res => res.json());
  }

}

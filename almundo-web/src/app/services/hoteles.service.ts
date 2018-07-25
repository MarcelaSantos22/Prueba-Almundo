import { Http} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Config } from '../models/config';

@Injectable()
export class HotelesService {

  private url: string;

  // private methods = {
  //   getHoteles: 'getHoteles'
  // };

  constructor(private _http: Http) {
    this.url = Config.API_HOTEL;
  }

  getHoteles() {
    // return this._http.get(`${this.url}/${this.methods.getHoteles}?${Config.JSON}=${JSON.stringify(data)}`)
    return this._http.get(this.url + 'hoteles').map(res => res.json());
  }
  /*
    getHoteles( data : any  ){
      return this.http.post(this.path, { 'json': JSON.stringify(data) } );
    }*/

}

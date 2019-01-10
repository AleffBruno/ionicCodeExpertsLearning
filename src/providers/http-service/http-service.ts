import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http'; 
import { Injectable } from '@angular/core';


@Injectable()
export class HttpServiceProvider {
  private url:string = "https://rocketseat-node.herokuapp.com/api/";

  constructor(public httpClient: HttpClient,public http: Http) {
    console.log('Hello HttpServiceProvider Provider');
  }

  getAll(endpoint) {
    return this.http.get(this.url+endpoint)
              .map(res => {
                return res.json()
              });
  }
}

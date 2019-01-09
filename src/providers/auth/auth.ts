import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient,
              public storate: Storage) {
    //console.log('Hello AuthProvider Provider');
  }

  login() {

  }

  userIsLoger() {
    this.storate.get('token').then(val => {
      if(val !== undefined) {
        return val;
      } else {
        return false;
      }
    })
  }

  logout() {
    this.storate.remove('token');
  }
}

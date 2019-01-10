import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient,
              public storate: Storage) {
    //console.log('Hello AuthProvider Provider');
  }

  login(credentials) {
    //AQUI ERA PRA TER UM POST PARA A API USANDO HTTP, mas para guardar tempo, vai ser hardcode
    // MOCK DE JWT QUE VEIO ABAIXO
    let fakeJwt = "qwe123";
    this.storate.set('token',fakeJwt); //CUIDADO PARA NAO SALVAR UM OBJETO[so se necessario], SE LIGUE NA "CHAVE"
    //console.log(credentials);
  }

  userIsLogged() {
    this.storate.get('token').then(val => {
      if(val) {
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

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';


@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient,
              public storage: Storage,
              public toastCrtl: ToastController) {
    //console.log('Hello AuthProvider Provider');
  }

  login(credentials) {
    //AQUI ERA PRA TER UM POST PARA A API USANDO HTTP, mas para guardar tempo, vai ser hardcode
    // MOCK DE JWT QUE VEIO ABAIXO
    let fakeJwt = "qwe123";
    this.storage.set('token',fakeJwt); //CUIDADO PARA NAO SALVAR UM OBJETO[so se necessario], SE LIGUE NA "CHAVE"
    console.log("LOGIN FUNCTION");
  }

  userIsLogged() {
    // isso funciona mas como nao esta no tutorial, vou deixar aqui para exemplo [coloque async na função]
    // var awaitToken = await this.storage.get('token');
    // if(awaitToken) {
    //   return true;
    // } else {
    //   return false;
    // }

    //SE LIGUE NO 'DOUBLE' RETURN ABAIXO
    return this.storage.get('token').then((val) => {
      if(val) {
        return val;
      } else {
        let toast = this.toastCrtl.create({
          message: "Faça login na aplicação",
          duration: 3000
        });
        toast.present();
        return false;
      }
    }).catch((err) => {
      console.log(err);
      return false;
    })
  }

  logout() {
    this.storage.remove('token');
  }
}

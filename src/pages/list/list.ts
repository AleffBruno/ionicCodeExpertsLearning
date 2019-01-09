import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  //ISSO ESTA COM O NOME LIST MAS NO TUTORIAL ISSO É UM FORM DE CADASTRO, CUIDADO !!!

  selectedItem: any;
  icons: string[];
  public product = {title:"",description:"",img:""};

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public camera: Camera) {
    
  }

  saveProduct(product) {
    console.log(product);
  }

  getPhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL, // antes era FILE_URI, com DATA_URL funcionou
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
     this.product.img = base64Image;
    }, (err) => {
      console.log(err);
     // Handle error
    });
  }

}

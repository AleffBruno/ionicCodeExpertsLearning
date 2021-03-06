import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  public product:any;
  public currentPicture:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public http:Http,
              public camera: Camera,
              public authProvider: AuthProvider
            ) {
                
              //let url = this.navParams.get('api_url');
              //let product_id = this.navParams.get('product_id');
              let currentProduct = this.navParams.get('currentProduct');

              this.product = currentProduct;
              //alert(currentProduct.description);
  }

  ionViewCanEnter() {
    return this.authProvider.userIsLogged();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
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
     this.currentPicture = base64Image;
    }, (err) => {
      console.log(err);
     // Handle error
    });
  }

}

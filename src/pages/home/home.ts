import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TestPage } from '../test/test';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpServiceProvider } from '../../providers/http-service/http-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  //public products: Array<{}>;
  public products: any;

  constructor(public navCtrl: NavController,public http: HttpServiceProvider) {
    this.http.getAll('products')
      .subscribe(data => {
      let { docs } = data;
      this.products = docs;
    },error => {
      console.log(error.json());
    })
  }

  goToTestPage() {
    this.navCtrl.push(TestPage);
  }

  getProductInfo(id) {
    let currentProduct = this.products.find(x => x._id == id);
    
    //alert(id);
    this.navCtrl.push(TestPage,{
      'product_id': id,
      'currentProduct' : currentProduct
    });
  }

}

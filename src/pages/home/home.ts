import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TestPage } from '../test/test';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private url:string = "https://rocketseat-node.herokuapp.com/api/";
  //public products: Array<{}>;
  public products: any;

  constructor(public navCtrl: NavController,public http: Http) {
    this.http.get(this.url+"products")
              .map(res => res.json())
              .subscribe(data => {
                let { docs } = data;
                this.products = docs;
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
      'api_url': this.url,
      'currentProduct' : currentProduct
    });
  }

}

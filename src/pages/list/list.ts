import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  public product = {title:"",description:""};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  saveProduct(product) {
    console.log(product);
  }

}

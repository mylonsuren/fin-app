import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NavController } from 'ionic-angular';
import {apiSecret, apiKey, verDate} from '../../app/keys';

// Coinbase API
import Coinbase from 'coinbase';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  
  price : string;


  constructor(public navCtrl: NavController, public http: Http) {
  }

  ionViewDidLoad() {

    console.dir(Coinbase)

    var Client = Coinbase.Client;

    var client = new Client({
      'apiKey': apiKey,
      'apiSecret': apiSecret,
      'version': verDate
    });

    var currencyCode = 'USD'  // can also use EUR, CAD, etc.

    // Make the request
    client.getSpotPrice({'currency': currencyCode}, function(err, price) {
      console.log('Current bitcoin price in ' + currencyCode + ': ' +  price.data.amount);
    });
  }

  

}

import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  
  price : string;


  constructor(public navCtrl: NavController, public http: Http) {
  }

  ionViewDidLoad() {
    // var Client = require('coinbase').Client; 

    // var client = new Client({
    //   'apiKey': 'wYNNRaoTy4bDuGfD',
    //   'apiSecret': 'xa6sCLKC1EaaVO87PKVDEkkpLRNK2om1',
    // });
    // // 'version':'2018-02-08 '    
    // // var currencyCode = 'CAD'  // can also use EUR, CAD, etc.
    
    // // Make the request
    // client.getSpotPrice({'currencyPair': 'BTC-USD'}, function(err, price) {
    //   console.log(price);
    // });

    this.http.get('https://api.coinbase.com/v2/prices/BTC-USD/spot')
      .map(res => res.json())

      .subscribe(data => {
        console.log(data);
        // this.zone.run(() => this.entrants = data);
        this.price = d`ata;

      });



  }

  

}

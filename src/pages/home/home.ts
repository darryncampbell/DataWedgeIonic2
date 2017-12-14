import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
//import { WebIntent } from '@ionic-native/web-intent';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
    (<any>window).plugins.intentShim.registerBroadcastReceiver({
      filterActions: [
          'com.ionic.datawedge.ACTION'
          ],
      filterCategories: [
          'com.android.intent.category.DEFAULT'
          ]
      },
      function(intent) {
          //  Broadcast received
          console.log('Received Intent: ' + JSON.stringify(intent.extras));
          let toast = toastCtrl.create({
            message: 'Scan: ' + intent.extras["com.symbol.datawedge.data_string"],
            duration: 3000
          });
          toast.present();
      }
    );
  }

}

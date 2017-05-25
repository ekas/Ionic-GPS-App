import { Component } from '@angular/core';
import { Geolocation} from '@ionic-native/geolocation';
import { Geofence } from '@ionic-native/geofence';
import { SMS } from '@ionic-native/sms';
import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  radius: number = 100; 
  error: any;
  success: any;

  constructor(public navCtrl: NavController, private platform: Platform) {
    this.platform.ready().then(() => {
      Geofence.initialize().then(
        ()  => console.log("Geofence plugin ready"),
        (err) => console.log(err)
        );
    })
  }

}

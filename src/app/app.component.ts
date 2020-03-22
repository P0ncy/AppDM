import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDuEqdWk4EgVwAMtjF8goepGht76EeLcpY",
  authDomain: "apps-49f64.firebaseapp.com",
  databaseURL: "https://apps-49f64.firebaseio.com",
  projectId: "apps-49f64",
  storageBucket: "apps-49f64.appspot.com",
  messagingSenderId: "994104505194",
  appId: "1:994104505194:web:8cc42e44ab7fd2b2292b13",
  measurementId: "G-G0QDVNBJE7"
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}

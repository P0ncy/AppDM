import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'Firebase';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  [x: string]: any;

  infos = [];
  ref = firebase.database().ref('infos/');
  
  constructor(private route: ActivatedRoute, public router: Router, public alertController: AlertController) {
    this.ref.on('value', resp => {
      this.infos = [];
      this.infos = snapshotToArray(resp);
    });
  }

  /*addInfo() {
    this.router.navigate(['/add-info']);
  }*/

  edit(key: string) {
    this.router.navigate(['/edit/'+key]);
  }
  
  async delete(key: string) {
    const alert = await this.alertController.create({
      header: 'Confirmation',
      message: 'Etes-vous sure de vouloir supprimmer ce pense-bête?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('cancel');
          }
        }, {
          text: 'Oui',
          handler: () => {
            firebase.database().ref('infos/'+key).remove();
          }
        }
      ]
    });
  
    await alert.present();
  }
}

export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });

  return returnArr;
};
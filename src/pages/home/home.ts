import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { BiddingPage } from '../bidding/bidding';

export class PageInterface {
  title: string;
  pageName: any;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  constructor(
     private navCtrl: NavController,
     private alertCtrl: AlertController) {
  }

  public ngOnInit() : void {
    this.presentConfirm();
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'You have a match with a bidding',
      message: 'Do you want see more information about this bidding?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel');
          }
        },
        {
          text: 'See',
          handler: () => {
            console.log('See');
            this.openPage();
          }
        }
      ]
    });
    alert.present();
  }

  pages : PageInterface [] = [{ title: 'Bidding', pageName: BiddingPage, icon: 'home' }];

  openPage() {
    let page = this.pages[0];

    let params = {};

    if (page.index) {
      params = { tabIndex: page.index };
    }

    if (this.navCtrl.getActiveChildNavs()[0] && page.index != undefined) {
      this.navCtrl.getActiveChildNavs()[0].select(page.index);
    } else {
      this.navCtrl.setRoot(page.pageName, params);
    }
  }
}


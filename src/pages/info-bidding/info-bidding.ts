import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { BiddingPage } from '../bidding/bidding';
import { HomePage } from '../home/home';

export class PageInterface {
  title: string;
  pageName: any;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@Component({
  selector: 'page-info-bidding',
  templateUrl: 'info-bidding.html'
})
export class InfoBiddingPage implements OnInit{

  constructor(
     private navCtrl: NavController) {
  }

  public ngOnInit() : void {
  }

  public compete() {
    alert("Great! You're running. Soon you will receive news.");
    this.openPage();
  }
  
  pages : PageInterface [] = [{ title: 'Home', pageName: HomePage, icon: 'home' }];

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


import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { InfoBiddingPage } from '../info-bidding/info-bidding';

export class PageInterface {
  title: string;
  pageName: any;
  tabComponent?: any;
  index?: number;
  icon: string;
}


@Component({
  selector: 'page-bidding',
  templateUrl: 'bidding.html'
})
export class BiddingPage implements OnInit{

  constructor(
     private navCtrl: NavController) {
  }

  public openInfoBidding() {
    this.openPage();
  }

  public ngOnInit() : void {
  }

  pages : PageInterface [] = [{ title: 'InfoBidding', pageName: InfoBiddingPage, icon: 'home' }];

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


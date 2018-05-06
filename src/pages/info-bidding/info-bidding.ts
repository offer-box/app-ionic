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
  selector: 'page-info-bidding',
  templateUrl: 'info-bidding.html'
})
export class InfoBiddingPage implements OnInit{

  constructor(
     private navCtrl: NavController) {
  }

  public ngOnInit() : void {
  }

  
}


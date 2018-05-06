
import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { HomePage } from '../home/home';

export class PageInterface {
  title: string;
  pageName: any;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage implements OnInit{
  @ViewChild(Nav) nav: Nav;

  rootPage = HomePage;

  pages: PageInterface[];

  public ngOnInit() : void {
    this.pages = [
      { title: 'Home', pageName: HomePage, icon: 'home' },
    ];

    console.log(this.pages);
  }

  constructor(public navCtrl: NavController) {

  }

  openPage(page: PageInterface) {
    let params = {};

    if (page.index) {
      params = { tabIndex: page.index };
    }

    if (this.nav.getActiveChildNavs()[0] && page.index != undefined) {
      this.nav.getActiveChildNavs()[0].select(page.index);
    } else {
      this.nav.setRoot(page.pageName, params);
    }
  }

}

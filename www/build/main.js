webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PageInterface */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageInterface = /** @class */ (function () {
    function PageInterface() {
    }
    return PageInterface;
}());

var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
    }
    MenuPage.prototype.ngOnInit = function () {
        this.pages = [
            { title: 'Home', pageName: __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], icon: 'home' },
        ];
        console.log(this.pages);
    };
    MenuPage.prototype.openPage = function (page) {
        var params = {};
        if (page.index) {
            params = { tabIndex: page.index };
        }
        if (this.nav.getActiveChildNavs()[0] && page.index != undefined) {
            this.nav.getActiveChildNavs()[0].select(page.index);
        }
        else {
            this.nav.setRoot(page.pageName, params);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MenuPage.prototype, "nav", void 0);
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/Users/matheuscatossi/eclipse-workspace/offer-box-ionic/src/pages/menu/menu.html"*/'\n<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n   \n<ion-content>\n  <ion-list>\n    <button ion-item menuClose *ngFor="let p of pages" (click)="openPage(p)">\n      <ion-icon item-start [name]="p.icon"></ion-icon>\n      {{ p.title }}\n    </button>\n  </ion-list>\n</ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/matheuscatossi/eclipse-workspace/offer-box-ionic/src/pages/menu/menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PageInterface */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bidding_bidding__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageInterface = /** @class */ (function () {
    function PageInterface() {
    }
    return PageInterface;
}());

var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.pages = [{ title: 'Bidding', pageName: __WEBPACK_IMPORTED_MODULE_2__bidding_bidding__["a" /* BiddingPage */], icon: 'home' }];
    }
    HomePage.prototype.ngOnInit = function () {
        this.presentConfirm();
    };
    HomePage.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'You have a match with a bidding',
            message: 'Do you want see more information about this bidding?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel');
                    }
                },
                {
                    text: 'See',
                    handler: function () {
                        console.log('See');
                        _this.openPage();
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.openPage = function () {
        var page = this.pages[0];
        var params = {};
        if (page.index) {
            params = { tabIndex: page.index };
        }
        if (this.navCtrl.getActiveChildNavs()[0] && page.index != undefined) {
            this.navCtrl.getActiveChildNavs()[0].select(page.index);
        }
        else {
            this.navCtrl.setRoot(page.pageName, params);
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/matheuscatossi/eclipse-workspace/offer-box-ionic/src/pages/home/home.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n		  <ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Home</ion-title>\n	</ion-navbar>\n</ion-header>\n	  \n<ion-content padding>\n    Homeeeee!\n</ion-content>\n	  '/*ion-inline-end:"/Users/matheuscatossi/eclipse-workspace/offer-box-ionic/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PageInterface */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BiddingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_bidding_info_bidding__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageInterface = /** @class */ (function () {
    function PageInterface() {
    }
    return PageInterface;
}());

var BiddingPage = /** @class */ (function () {
    function BiddingPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.pages = [{ title: 'InfoBidding', pageName: __WEBPACK_IMPORTED_MODULE_2__info_bidding_info_bidding__["a" /* InfoBiddingPage */], icon: 'home' }];
    }
    BiddingPage.prototype.openInfoBidding = function () {
        this.openPage();
    };
    BiddingPage.prototype.ngOnInit = function () {
    };
    BiddingPage.prototype.openPage = function () {
        var page = this.pages[0];
        var params = {};
        if (page.index) {
            params = { tabIndex: page.index };
        }
        if (this.navCtrl.getActiveChildNavs()[0] && page.index != undefined) {
            this.navCtrl.getActiveChildNavs()[0].select(page.index);
        }
        else {
            this.navCtrl.setRoot(page.pageName, params);
        }
    };
    BiddingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bidding',template:/*ion-inline-start:"/Users/matheuscatossi/eclipse-workspace/offer-box-ionic/src/pages/bidding/bidding.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n		  <ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Bidding</ion-title>\n	</ion-navbar>\n</ion-header>\n	  \n<ion-content padding>\n	<img src="assets/imgs/light.png" style="width:40%;display: block; margin: 0 auto;" />\n\n	<ion-grid>\n		<ion-row>\n			<ion-col col-4>\n				<img src="assets/imgs/product.png" style="width:50%;display: block; margin: 0 auto;" />\n			</ion-col>\n			<ion-col col-8>\n				<h4>Light</h4>\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col col-4>\n				<img src="assets/imgs/amount.png" style="width:50%;display: block; margin: 0 auto;" />\n			</ion-col>\n			<ion-col col-8>\n				<h4>Amount: 200 Units</h4>\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col col-4>\n				<img src="assets/imgs/winner.png" style="width:50%;display: block; margin: 0 auto;" />\n			</ion-col>\n			<ion-col col-8>\n				<h4>You have various possibilities for to win the bidding</h4>\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col col-4>\n				<img src="assets/imgs/advantage.png" style="width:50%;display: block; margin: 0 auto;" />\n			</ion-col>\n			<ion-col col-8>\n				<h4>In at most 30 days BEC pays your debts!</h4>\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col col-4>\n				<img src="assets/imgs/winner.png" style="width:50%;display: block; margin: 0 auto;" />\n			</ion-col>\n			<ion-col col-8>\n				<h4>If you are a micro-entrepreneur you can win the dispute with a price up to 5% higher</h4>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n\n	<button ion-button round style="display: block; margin: 0 auto;" (click)="openInfoBidding();">Agree!</button>\n\n</ion-content>\n	  '/*ion-inline-end:"/Users/matheuscatossi/eclipse-workspace/offer-box-ionic/src/pages/bidding/bidding.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], BiddingPage);
    return BiddingPage;
}());

//# sourceMappingURL=bidding.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PageInterface */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoBiddingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageInterface = /** @class */ (function () {
    function PageInterface() {
    }
    return PageInterface;
}());

var InfoBiddingPage = /** @class */ (function () {
    function InfoBiddingPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    InfoBiddingPage.prototype.ngOnInit = function () {
    };
    InfoBiddingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info-bidding',template:/*ion-inline-start:"/Users/matheuscatossi/eclipse-workspace/offer-box-ionic/src/pages/info-bidding/info-bidding.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n		  <ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Info Bidding</ion-title>\n	</ion-navbar>\n</ion-header>\n	  \n<ion-content class="card-background-page">\n\n	<img src="assets/imgs/light.png" style="width:40%;display: block; margin: 0 auto;" />\n\n	<h4 style="display: block; margin: 0 auto;">Light</h4>\n	\n  <ion-card>\n    <img src="assets/imgs/pdf.jpg"/>\n    <div class="card-title">Download Edital</div>\n    <div class="card-subtitle">100KB</div>\n  </ion-card>\n\n  <ion-card>\n    <img src="assets/imgs/pdf.jpg"/>\n    <div class="card-title">Download Edital 2</div>\n    <div class="card-subtitle">200KB</div>\n  </ion-card>\n\n  <ion-card>\n    <img src="assets/imgs/pdf.jpg"/>\n    <div class="card-title">Download Microentrepreneur</div>\n    <div class="card-subtitle">400KB</div>\n  </ion-card>\n\n</ion-content>\n	  '/*ion-inline-end:"/Users/matheuscatossi/eclipse-workspace/offer-box-ionic/src/pages/info-bidding/info-bidding.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], InfoBiddingPage);
    return InfoBiddingPage;
}());

//# sourceMappingURL=info-bidding.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_bidding_bidding__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_info_bidding_info_bidding__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_bidding_bidding__["a" /* BiddingPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_info_bidding_info_bidding__["a" /* InfoBiddingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_bidding_bidding__["a" /* BiddingPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_info_bidding_info_bidding__["a" /* InfoBiddingPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_menu_menu__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { HomePage } from '../pages/home/home';

var MyApp = /** @class */ (function () {
    // rootPage:any = 'MenuPage';
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_menu_menu__["a" /* MenuPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/matheuscatossi/eclipse-workspace/offer-box-ionic/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/matheuscatossi/eclipse-workspace/offer-box-ionic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map
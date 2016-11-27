"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var rootscope_service_1 = require("./service/rootscope.service");
// import { SemanticPopupComponent } from "ng-semantic";
require("rxjs/add/operator/map");
var AppComponent = (function () {
    // @ViewChild("myPopup") myPopup: SemanticPopupComponent;
    function AppComponent(http, $rootScope) {
        var _this = this;
        this.http = http;
        this.$rootScope = $rootScope;
        this.hiddenLogin = true;
        this.loginPading = "225px";
        this.appName = "Angular 2 Express";
        this.myClass10 = true;
        this.user = {
            password: "angualr2express",
            username: "john"
        };
        this.isLogged = !!localStorage.getItem("id_token");
        this.$rootScope.showNav$.subscribe(function (data) { return _this.showNav(data); });
    }
    AppComponent.prototype.logout = function () {
        localStorage.removeItem("id_token");
        location.reload();
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log("check login");
        var user = "";
        this.http
            .get("/login/checkLogin")
            .map(function (res) { return res.json(); })
            .subscribe(function (res) { return _this.checkLoginDoneAction(res); }, function (error) { return _this.checkLoginErrorAction(error); });
    };
    AppComponent.prototype.checkLoginDoneAction = function (res) {
        if (res.status) {
            this.hiddenLogin = false;
            this.loginPading = "225px";
            this.myClass10 = true;
        }
        else {
            this.hiddenLogin = true;
            this.loginPading = "0px";
            this.myClass10 = false;
            window.location.href = "#/login";
        }
    };
    AppComponent.prototype.checkLoginErrorAction = function (error) {
        console.log(error);
    };
    AppComponent.prototype.showNav = function (obj) {
        if (obj != "" && obj != undefined && obj != {}) {
            // let show = JSON.parse(obj);
            // this.hiddenLogin = show.isShow.hiddenLogin;
            // this.myClass10 = show.isShow.class10;
            // // console.log("10 = ", this.myClass10);
            // this.loginPading = show.isShow.loginPading;
            // console.log("obj = ", obj);
            var show = obj;
            this.hiddenLogin = show.hiddenLogin;
            this.myClass10 = show.class10;
            this.loginPading = show.loginPading;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "app",
            templateUrl: "./app.component.html"
        }), 
        __metadata('design:paramtypes', [http_1.Http, rootscope_service_1.RootScopeService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
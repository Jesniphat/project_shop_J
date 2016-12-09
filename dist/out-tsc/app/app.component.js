var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { Http } from "@angular/http";
import { RootScopeService } from "./service/rootscope.service";
import "rxjs/add/operator/map";
var AppComponent = (function () {
    function AppComponent(http, $rootScope) {
        var _this = this;
        this.http = http;
        this.$rootScope = $rootScope;
        this.hiddenLogin = true;
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
        var user = "";
        this.http
            .get("/api/login/checkLogin")
            .map(function (res) { return res.json(); })
            .subscribe(function (res) { return _this.checkLoginDoneAction(res); }, function (error) { return _this.checkLoginErrorAction(error); });
    };
    AppComponent.prototype.checkLoginDoneAction = function (res) {
        if (res.status) {
            this.hiddenLogin = false;
            this.myClass10 = true;
        }
        else {
            this.hiddenLogin = true;
            this.myClass10 = false;
            window.location.href = "#/login";
        }
    };
    AppComponent.prototype.checkLoginErrorAction = function (error) {
        console.log(error);
    };
    AppComponent.prototype.showNav = function (obj) {
        if (obj != "" && obj != undefined && obj != {}) {
            var show = obj;
            this.hiddenLogin = show.hiddenLogin;
            this.myClass10 = show.class10;
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Component({
        selector: "app",
        templateUrl: "./app.component.html"
    }),
    __metadata("design:paramtypes", [Http, RootScopeService])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=../../../src/app/app.component.js.map
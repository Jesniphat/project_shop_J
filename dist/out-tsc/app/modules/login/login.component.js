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
import { MenuService } from "../../service/menu.service";
import { ApiService } from "../../service/api.service";
import { RootScopeService } from "../../service/rootscope.service";
var LoginComponent = (function () {
    function LoginComponent(apiService, menuservice, $rootScope) {
        this.apiService = apiService;
        this.menuservice = menuservice;
        this.$rootScope = $rootScope;
        this.storage = localStorage;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService
            .get("/api/login/login")
            .subscribe(function (res) { return _this.getLoginDoneAction(res); }, function (error) { return _this.getLoginErrorAction(error); });
        this.$rootScope.loginShow({ hiddenLogin: true, loginPading: "0px", class10: false });
    };
    LoginComponent.prototype.getLoginDoneAction = function (res) {
    };
    LoginComponent.prototype.getLoginErrorAction = function (error) {
        this.error = error.message;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var param = {
            user: this.username,
            password: this.password
        };
        this.apiService
            .post("/api/login/login", param)
            .subscribe(function (res) { return _this.loginDoneAction(res); }, function (error) { return _this.loginErrorAction(error); });
    };
    LoginComponent.prototype.loginDoneAction = function (res) {
        if (res.status === true) {
            var loginData = JSON.stringify(res.data[0]);
            this.storage.setItem('logindata', loginData);
            window.location.href = "#/home";
            this.$rootScope.loginShow({ hiddenLogin: false, class10: true });
        }
        else {
            console.log("can't login");
        }
    };
    LoginComponent.prototype.loginErrorAction = function (error) {
        this.error = error.message;
        console.log("error = ", this.error);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Component({
        selector: "home",
        templateUrl: "login.component.html"
    }),
    __metadata("design:paramtypes", [ApiService, MenuService, RootScopeService])
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=../../../../../src/app/modules/login/login.component.js.map
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
var menu_service_1 = require("../../service/menu.service");
var api_service_1 = require("../../service/api.service");
var rootscope_service_1 = require("../../service/rootscope.service");
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
            .get("/login/login")
            .subscribe(function (res) { return _this.getLoginDoneAction(res); }, function (error) { return _this.getLoginErrorAction(error); });
        // this.$rootScope.loginShow('{"isShow": {"hiddenLogin":true,"loginPading":"0px","class10":false}}');
        this.$rootScope.loginShow({ hiddenLogin: true, loginPading: "0px", class10: false });
    };
    LoginComponent.prototype.getLoginDoneAction = function (res) {
        // console.log("res login = ", res);
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
        // console.log(param);
        this.apiService
            .post("/login/login", param)
            .subscribe(function (res) { return _this.loginDoneAction(res); }, function (error) { return _this.loginErrorAction(error); });
    };
    LoginComponent.prototype.loginDoneAction = function (res) {
        // console.log(" res = ", res);
        if (res.status === true) {
            var loginData = JSON.stringify(res.data[0]);
            this.storage.setItem('logindata', loginData);
            window.location.href = "#/home";
            // this.$rootScope.loginShow('{"isShow": {"hiddenLogin":false,"loginPading":"225px","class10":true}}');
            this.$rootScope.loginShow({ hiddenLogin: false, loginPading: "225px", class10: true });
        }
        else {
            console.log("can't login");
        }
    };
    LoginComponent.prototype.loginErrorAction = function (error) {
        this.error = error.message;
        console.log("error = ", this.error);
        // setTimeout(() => this.error = null, 4000);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "home",
            templateUrl: "modules/login/login.component.html"
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService, menu_service_1.MenuService, rootscope_service_1.RootScopeService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map
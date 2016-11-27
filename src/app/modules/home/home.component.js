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
var api_service_1 = require("../../service/api.service");
var pmsln_service_1 = require("../../service/pmsln.service");
var HomeComponent = (function () {
    function HomeComponent(apiService, permission) {
        this.apiService = apiService;
        this.permission = permission;
        this.permission.isLogin();
        console.log("home.component");
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.protected = function () {
        var _this = this;
        this.apiService
            .get("/api")
            .subscribe(function (data) { _this.response = data; }, function (error) {
            _this.error = error.message;
            setTimeout(function () { return _this.error = null; }, 4000);
        });
    };
    HomeComponent.prototype.test_service = function () {
        var _this = this;
        console.log("click");
        var param = { "id": "me", "cd": "you" };
        this.apiService
            .post("/login/checkLogin", param)
            .subscribe(function (data) {
            _this.response = data;
            console.log("from api service", data);
        }, function (error) {
            _this.error = error.message;
            setTimeout(function () { return _this.error = null; }, 4000);
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "home",
            templateUrl: "modules/home/home.component.html"
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService, pmsln_service_1.pmslnService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map
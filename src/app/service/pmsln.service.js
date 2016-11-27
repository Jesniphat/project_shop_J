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
require("rxjs/add/operator/map");
var pmslnService = (function () {
    function pmslnService(http) {
        this.http = http;
        // console.log("check some thing");
    }
    pmslnService.prototype.isLogin = function () {
        var _this = this;
        //console.log("service check login");
        //let config = new RequestOptions({headers: new Headers({"Content-Type": "application/json"})});
        this.http.get("/login/checkLogin")
            .map(function (res) { return res.json(); })
            .subscribe(function (res) { return _this.isLoginDoneAction(res); }, function (error) { return _this.isLoginErrorAction(error); });
    };
    pmslnService.prototype.isLoginDoneAction = function (res) {
        // console.log("res = ", res);
        if (!res.status) {
            window.location.href = "#/login";
        }
    };
    pmslnService.prototype.isLoginErrorAction = function (error) {
        console.log(error);
    };
    pmslnService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], pmslnService);
    return pmslnService;
}());
exports.pmslnService = pmslnService;
//# sourceMappingURL=pmsln.service.js.map
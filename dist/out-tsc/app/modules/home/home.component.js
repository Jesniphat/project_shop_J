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
import { ApiService } from "../../service/api.service";
import { pmslnService } from "../../service/pmsln.service";
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
            .post("/api/login/checkLogin", param)
            .subscribe(function (data) {
            _this.response = data;
            console.log("from api service", data);
        }, function (error) {
            _this.error = error.message;
            setTimeout(function () { return _this.error = null; }, 4000);
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Component({
        selector: "home",
        templateUrl: "home.component.html"
    }),
    __metadata("design:paramtypes", [ApiService, pmslnService])
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=../../../../../src/app/modules/home/home.component.js.map
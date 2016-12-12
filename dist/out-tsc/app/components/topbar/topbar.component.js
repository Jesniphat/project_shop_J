var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef } from "@angular/core";
import { RootScopeService } from "../../service/rootscope.service";
var TopbarComponent = (function () {
    function TopbarComponent($rootScope, _elRef) {
        this.$rootScope = $rootScope;
        this._elRef = _elRef;
        this.storage = localStorage;
    }
    TopbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.$rootScope.showNav$.subscribe(function (data) { return _this.setUserData(data); });
        if (this.storage.getItem('logindata')) {
            var logindata = JSON.parse(this.storage.getItem('logindata'));
            this.staffData = logindata;
            this.display_name = logindata.display_name;
        }
    };
    TopbarComponent.prototype.setUserData = function (obj) {
        console.log("do ever");
        if (this.storage.getItem('logindata')) {
            var logindata = JSON.parse(this.storage.getItem('logindata'));
            this.staffData = logindata;
            this.display_name = logindata.display_name;
        }
    };
    TopbarComponent.prototype.logOut = function () {
        window.location.href = "#/login";
    };
    return TopbarComponent;
}());
TopbarComponent = __decorate([
    Component({
        selector: "topbar",
        templateUrl: 'topbar.component.html',
        styleUrls: ['topbar.component.css']
    }),
    __metadata("design:paramtypes", [RootScopeService, ElementRef])
], TopbarComponent);
export { TopbarComponent };
//# sourceMappingURL=../../../../../src/app/components/topbar/topbar.component.js.map
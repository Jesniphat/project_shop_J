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
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
var MenuService = (function () {
    function MenuService() {
        // Observable navItem source
        this._navItemSource = new BehaviorSubject_1.BehaviorSubject("");
        this._logindata = new BehaviorSubject_1.BehaviorSubject("");
        // Observable navItem stream
        this.navItem$ = this._navItemSource.asObservable();
        this.loginData$ = this._logindata.asObservable();
    }
    // service command
    MenuService.prototype.changeNav = function (number) {
        this._navItemSource.next(number);
    };
    MenuService.prototype.setLoginData = function (string) {
        this._logindata.next(string);
    };
    MenuService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MenuService);
    return MenuService;
}());
exports.MenuService = MenuService;
//# sourceMappingURL=menu.service.js.map
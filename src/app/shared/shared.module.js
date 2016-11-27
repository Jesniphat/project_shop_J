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
var common_1 = require("@angular/common");
var api_service_1 = require("../service/api.service");
var menu_service_1 = require("../service/menu.service");
var rootscope_service_1 = require("../service/rootscope.service");
var pmsln_service_1 = require("../service/pmsln.service");
var table_filter_service_1 = require("../service/table.filter.service");
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule,
            providers: [
                api_service_1.ApiService,
                menu_service_1.MenuService,
                rootscope_service_1.RootScopeService,
                pmsln_service_1.pmslnService,
                table_filter_service_1.FilterTable
            ]
        };
    };
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [],
            exports: []
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map
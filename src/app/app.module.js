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
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
// import { provideAuth } from "angular2-jwt";
var http_1 = require("@angular/http");
var primeng_1 = require('primeng/primeng');
var app_component_1 = require('./app.component');
var menu_component_1 = require("./components/menu/menu.component");
var topbar_component_1 = require("./components/topbar/topbar.component");
var login_module_1 = require("./modules/login/login.module");
var routes_1 = require("./routes");
var home_module_1 = require("./modules/home/home.module");
var setting_module_1 = require("./modules/setting/setting.module");
var category_module_1 = require("./modules/category/category.module");
var product_module_1 = require("./modules/product/product.module");
var shared_module_1 = require("./shared/shared.module");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                ////////////////////// system module//////////////////////////
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                primeng_1.InputTextModule,
                primeng_1.MenuModule,
                primeng_1.MenubarModule,
                primeng_1.PanelMenuModule,
                primeng_1.MessagesModule,
                primeng_1.GrowlModule,
                ////////////////////// custom module//////////////////////////
                login_module_1.LoginModule,
                home_module_1.HomeModule,
                setting_module_1.SettingModule,
                category_module_1.CategoryModule,
                product_module_1.ProductModule,
                routes_1.routing,
                shared_module_1.SharedModule.forRoot()
            ],
            // providers: [
            //     provideAuth({
            //         globalHeaders: [{"Content-type": "application/json"}],
            //         newJwtError: true,
            //         noTokenScheme: true
            //     })
            // ],
            declarations: [
                menu_component_1.MenuComponent,
                topbar_component_1.TopbarComponent,
                app_component_1.AppComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            schemas: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
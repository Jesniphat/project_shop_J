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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require("@angular/http");
var primeng_1 = require('primeng/primeng');
var product_routing_1 = require("./product.routing");
var shared_module_1 = require("../../shared/shared.module");
var product_list_component_1 = require("./product_list/product_list.component");
var product_manage_component_1 = require('./product_manage/product_manage.component');
var product_pic_component_1 = require('./product_pic/product_pic.component');
var ProductModule = (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                primeng_1.DataTableModule,
                primeng_1.ButtonModule,
                primeng_1.SplitButtonModule,
                primeng_1.InputTextModule,
                primeng_1.InputTextareaModule,
                primeng_1.PanelModule,
                primeng_1.DropdownModule,
                primeng_1.FileUploadModule,
                primeng_1.ConfirmDialogModule,
                primeng_1.MessagesModule,
                primeng_1.GrowlModule,
                primeng_1.DialogModule,
                http_1.HttpModule,
                product_routing_1.routing,
                shared_module_1.SharedModule.forRoot()
            ],
            declarations: [
                product_list_component_1.ProductListComponent,
                product_manage_component_1.ProductManageComponent,
                product_pic_component_1.ProductPicComponent
            ],
            bootstrap: [product_list_component_1.ProductListComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], ProductModule);
    return ProductModule;
}());
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map
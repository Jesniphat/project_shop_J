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
var category_routing_1 = require("./category.routing");
var shared_module_1 = require("../../shared/shared.module");
var category_list_component_1 = require("./category_list/category_list.component");
var category_manage_component_1 = require('./category_manage/category_manage.component');
var testfilter_pipes_1 = require("../../pipes/testfilter.pipes");
// import { FormComponent } from "./form/form.component";
// import { ProfileComponent } from "./profile/profile.component";
var CategoryModule = (function () {
    function CategoryModule() {
    }
    CategoryModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                primeng_1.DataTableModule,
                primeng_1.ButtonModule,
                primeng_1.SplitButtonModule,
                primeng_1.InputTextModule,
                primeng_1.InputTextareaModule,
                primeng_1.DropdownModule,
                primeng_1.FileUploadModule,
                primeng_1.PanelModule,
                http_1.HttpModule,
                primeng_1.ConfirmDialogModule,
                primeng_1.MessagesModule,
                primeng_1.GrowlModule,
                category_routing_1.routing,
                shared_module_1.SharedModule.forRoot()
            ],
            // exports: [ ProfileComponent ],
            declarations: [
                category_list_component_1.CategoryListComponent,
                category_manage_component_1.CategoryManageComponent,
                testfilter_pipes_1.filterTest
            ],
            bootstrap: [category_list_component_1.CategoryListComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], CategoryModule);
    return CategoryModule;
}());
exports.CategoryModule = CategoryModule;
//# sourceMappingURL=category.module.js.map
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
var router_1 = require('@angular/router');
var api_service_1 = require("../../../service/api.service");
var menu_service_1 = require("../../../service/menu.service");
var pmsln_service_1 = require("../../../service/pmsln.service");
var CategoryListComponent = (function () {
    function CategoryListComponent(router, apiService, _navService, permission, _elRef) {
        this.router = router;
        this.apiService = apiService;
        this._navService = _navService;
        this.permission = permission;
        this._elRef = _elRef;
        this.item = 1;
        this.error = "";
        this.query = "";
        this.categoryLists = [];
        this.categorys = [];
        this.cols = ["cate_name", "cate_description", "product_qty", "status"];
        this.testPipes = "";
    }
    CategoryListComponent.prototype.ngOnInit = function () {
        this.permission.isLogin();
        console.log("category_list.component");
        this.getCategoryList();
    };
    CategoryListComponent.prototype.getCategoryList = function () {
        var _this = this;
        var param = { "id": "ทดสอบ" };
        this.apiService
            .post("category/category_list", param)
            .subscribe(function (data) { return _this.getCategoryDoneAction(data); }, // OR this.categoryLists = data.data,
        function (// OR this.categoryLists = data.data,
            error) { return _this.errorAction(error); });
    };
    CategoryListComponent.prototype.getCategoryDoneAction = function (data) {
        // console.log("data = ", data);
        this.categoryLists = data.data;
    };
    CategoryListComponent.prototype.errorAction = function (error) {
        this.error = error.message;
        console.log("errer = ", this.error);
    };
    CategoryListComponent.prototype.add_new_category = function (data) {
        // console.log("add new cate = ", data);
        var link;
        if (data == 'create') {
            link = ['/category_list/create_cate', data];
        }
        else {
            link = ['/category_list/create_cate', data._id];
        }
        this.router.navigate(link);
    };
    CategoryListComponent.prototype.clickme = function (md) {
        console.log(md);
        $(this._elRef.nativeElement).find('#me').removeClass("a");
        $(this._elRef.nativeElement).find('#me').addClass("intro");
    };
    CategoryListComponent = __decorate([
        core_1.Component({
            selector: "catagory",
            templateUrl: "modules/category/category_list/category_list.html",
        }), 
        __metadata('design:paramtypes', [router_1.Router, api_service_1.ApiService, menu_service_1.MenuService, pmsln_service_1.pmslnService, core_1.ElementRef])
    ], CategoryListComponent);
    return CategoryListComponent;
}());
exports.CategoryListComponent = CategoryListComponent;
//# sourceMappingURL=category_list.component.js.map
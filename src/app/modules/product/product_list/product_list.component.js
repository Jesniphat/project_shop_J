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
var pmsln_service_1 = require("../../../service/pmsln.service");
var ProductListComponent = (function () {
    function ProductListComponent(router, apiService, permission, _elRef) {
        this.router = router;
        this.apiService = apiService;
        this.permission = permission;
        this._elRef = _elRef;
        this.cols = ["product_name", "product_description", "product_qty", "product_price"];
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.permission.isLogin();
        console.log("product_list.component");
        this.getAllProduct();
    };
    ProductListComponent.prototype.add_new_product = function (data) {
        var link;
        if (data == 'create') {
            link = ['/product_list/product', data];
        }
        else {
            link = ['/product_list/product', data._id];
        }
        this.router.navigate(link);
    };
    ProductListComponent.prototype.viwe_product_pic = function (data) {
        var link;
        console.log("Product Pic = ", data);
        link = ['/product_list/product_pic/', data._id];
        this.router.navigate(link);
    };
    ProductListComponent.prototype.getAllProduct = function () {
        var _this = this;
        var param = { "id": "สินค้าทั้งหมด" };
        this.apiService
            .post("product/product_list", param)
            .subscribe(function (data) { return _this.productLists = data.data; }, function (error) { return _this.getAllProductErrorAction(error); });
    };
    ProductListComponent.prototype.getAllProductErrorAction = function (error) {
        this.error = error.message;
        console.log("errer = ", this.error);
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: "product-list",
            templateUrl: "modules/product/product_list/product_list.html",
        }), 
        __metadata('design:paramtypes', [router_1.Router, api_service_1.ApiService, pmsln_service_1.pmslnService, core_1.ElementRef])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product_list.component.js.map
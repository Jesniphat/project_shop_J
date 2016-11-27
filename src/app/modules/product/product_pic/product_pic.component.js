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
var primeng_1 = require('primeng/primeng');
var api_service_1 = require("../../../service/api.service");
var menu_service_1 = require("../../../service/menu.service");
var pmsln_service_1 = require("../../../service/pmsln.service");
var ProductPicComponent = (function () {
    function ProductPicComponent(router, route, apiService, permission, _navService, _elRef, confirmationService) {
        this.router = router;
        this.route = route;
        this.apiService = apiService;
        this.permission = permission;
        this._navService = _navService;
        this._elRef = _elRef;
        this.confirmationService = confirmationService;
        this.product = {
            id: ""
        };
    }
    ProductPicComponent.prototype.ngOnInit = function () {
        this.permission.isLogin();
        console.log("product_pic.component");
        this.product.id = this.route.snapshot.params['id'];
        console.log("Product Id = ", this.product.id);
        this.getProductPicById(this.product.id);
    };
    ProductPicComponent.prototype.getProductPicById = function (id) {
        var _this = this;
        var param = {
            product_id: id
        };
        this.apiService
            .post("/product/getproductbyid", param)
            .subscribe(function (res) { return _this.getProductPicByIdDoneAction(res); }, function (error) { return _this.getProductPicByIdErrorAction(error); });
    };
    ProductPicComponent.prototype.getProductPicByIdDoneAction = function (res) {
        if (res.status === true) {
            // console.log(res);
            this.product_pic = [];
            var productResData = res.data[0];
            var localpic = "./uploads/product_pic/";
            for (var i = 0; i < productResData['product_pic'].length; i++) {
                this.product_pic.push({
                    product_pic: localpic + productResData['product_pic'][i]
                });
            }
            console.log("Pic data = ", this.product_pic);
        }
        else {
            console.log("No data");
        }
    };
    ProductPicComponent.prototype.getProductPicByIdErrorAction = function (error) {
        this.error = error.message;
        console.log("error = ", this.error);
    };
    ProductPicComponent = __decorate([
        core_1.Component({
            selector: "product_pic_edit",
            templateUrl: "modules/product/product_pic/product_pic.html",
            providers: [primeng_1.ConfirmationService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, api_service_1.ApiService, pmsln_service_1.pmslnService, menu_service_1.MenuService, core_1.ElementRef, primeng_1.ConfirmationService])
    ], ProductPicComponent);
    return ProductPicComponent;
}());
exports.ProductPicComponent = ProductPicComponent;
//# sourceMappingURL=product_pic.component.js.map
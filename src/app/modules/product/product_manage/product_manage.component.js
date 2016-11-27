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
var ProductManageComponent = (function () {
    function ProductManageComponent(router, route, apiService, permission, _navService, _elRef, confirmationService) {
        this.router = router;
        this.route = route;
        this.apiService = apiService;
        this.permission = permission;
        this._navService = _navService;
        this._elRef = _elRef;
        this.confirmationService = confirmationService;
        this.error = "";
        this.product = {
            id: "",
            name: "",
            desc: "",
            price: 0,
            qty: 0,
            picName: []
        };
        this.statusLists = [{ label: 'Active', value: 'Y' },
            { label: 'Unactive', value: 'N' }];
        this.selectedStatus = "Y";
        this.productPicName = [];
        this.uploadedFiles = [];
    }
    ProductManageComponent.prototype.ngOnInit = function () {
        this.permission.isLogin();
        console.log("product_managet.component");
        this.product.id = this.route.snapshot.params['id'];
        console.log("Product Id = ", this.product.id);
        if (this.product.id != "create") {
        }
        this.hideUploadBt();
    };
    ProductManageComponent.prototype.changeStatus = function (newValue) {
        console.log(newValue);
        this.selectedStatus = newValue;
    };
    ProductManageComponent.prototype.onUploaded = function (event) {
        console.log("onUploaded = ", event);
        console.log("get xhr = ", JSON.parse(event.xhr.response));
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.uploadedFiles.push(file);
        }
        var pic_name = JSON.parse(event.xhr.response);
        if (pic_name.status === true) {
            this.product.picName.push(pic_name.fileName);
        }
        else {
            console.log("error = ", pic_name.exMessage);
            // this.toastr.warning('บันทึกรูปภาพไม่สำเร็จกรุณาลองใหม่อีกครั้ง', 'Oops!');
            this.msgs = [];
            this.msgs.push({ severity: 'warn', summary: 'Oops!', detail: 'บันทึกรูปภาพไม่สำเร็จกรุณาลองใหม่อีกครั้ง' });
        }
    };
    ProductManageComponent.prototype.onUploadedError = function (event) {
        console.log("upload error = ", event);
        // this.toastr.warning('บันทึกรูปภาพไม่สำเร็จกรุณาลองใหม่อีกครั้ง', 'Oops!');
        this.msgs = [];
        this.msgs.push({ severity: 'warn', summary: 'Oops!', detail: 'บันทึกรูปภาพไม่สำเร็จกรุณาลองใหม่อีกครั้ง' });
    };
    ProductManageComponent.prototype.hideUploadBt = function () {
        $(this._elRef.nativeElement).find("[label=Upload]").css({ "display": "none" });
        $(this._elRef.nativeElement).find("[label=Cancel]").css({ "display": "none" });
        $(this._elRef.nativeElement).find("#cancelAll").css({ "display": "inherit" });
    };
    ProductManageComponent.prototype.checkBeforSave = function () {
        var _this = this;
        if ((this.product.picName).length == 0) {
            this.confirmationService.confirm({
                message: "You doesn't upload product picture. Do you want to save this product?",
                accept: function () {
                    //Actual logic to perform a confirmation
                    _this.saveProduct();
                }
            });
        }
        else {
            this.confirmationService.confirm({
                message: 'Are you sure that you want to save this product?',
                accept: function () {
                    //Actual logic to perform a confirmation
                    _this.saveProduct();
                }
            });
        }
    };
    ProductManageComponent.prototype.saveProduct = function () {
        var _this = this;
        console.log("save product");
        this.apiService
            .post("/product/saveproduct", this.product)
            .subscribe(function (res) { return _this.saveProductDoneAction(res); }, function (error) { return _this.saveProductErrorAction(error); });
    };
    ProductManageComponent.prototype.saveProductDoneAction = function (res) {
        console.log("res = ", res);
        if (res.status === true) {
            // this.toastr.success('บันทึกข้อมูลสำเร็จ', 'Success!');
            this.msgs = [];
            this.msgs.push({ severity: 'success', summary: 'Success!', detail: 'บันทึกข้อมูลสำเร็จ' });
            this.reset();
        }
        else {
            console.log("can't save ", res.error);
            // this.toastr.warning('บันทึกข้อมูลไม่สำเร็จ', 'Oops!');
            this.msgs = [];
            this.msgs.push({ severity: 'warn', summary: 'Oops!', detail: 'บันทึกข้อมูลไม่สำเร็จ' });
        }
    };
    ProductManageComponent.prototype.saveProductErrorAction = function (error) {
        this.error = error.message;
        console.log("error = ", this.error);
        // this.toastr.warning('บันทึกข้อมูลไม่สำเร็จ', 'Oops!');
        this.msgs = [];
        this.msgs.push({ severity: 'warn', summary: 'Oops!', detail: 'บันทึกข้อมูลไม่สำเร็จ' });
    };
    ProductManageComponent.prototype.onSubmit = function (value) {
        console.log("value submit = ", value);
    };
    ProductManageComponent.prototype.reset = function () {
        this.product = {
            id: "",
            name: "",
            desc: "",
            price: 0,
            qty: 0,
            picName: []
        };
        this.uploadedFiles = [];
    };
    ProductManageComponent = __decorate([
        core_1.Component({
            selector: "product_edit",
            templateUrl: "modules/product/product_manage/product_manage.html",
            providers: [primeng_1.ConfirmationService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, api_service_1.ApiService, pmsln_service_1.pmslnService, menu_service_1.MenuService, core_1.ElementRef, primeng_1.ConfirmationService])
    ], ProductManageComponent);
    return ProductManageComponent;
}());
exports.ProductManageComponent = ProductManageComponent;
//# sourceMappingURL=product_manage.component.js.map
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
var CategoryManageComponent = (function () {
    function CategoryManageComponent(router, route, apiService, permission, _navService, _elRef, confirmationService) {
        this.router = router;
        this.route = route;
        this.apiService = apiService;
        this.permission = permission;
        this._navService = _navService;
        this._elRef = _elRef;
        this.confirmationService = confirmationService;
        this.error = "";
        this.cate = {
            cateId: "",
            cateName: "",
            cateDescription: "",
            selectedStatus: "Y"
        };
        this.statusLists = [{ label: 'Active', value: 'Y' },
            { label: 'Unactive', value: 'N' }];
    }
    CategoryManageComponent.prototype.ngOnInit = function () {
        this.permission.isLogin();
        console.log("category_managet.component");
        this.cate.cateId = this.route.snapshot.params['id'];
        //   console.log(this.cateId);
        if (this.cate.cateId != "create") {
            this.getCategoryByid(this.cate.cateId);
        }
        // this.hideSomeBt();
    };
    CategoryManageComponent.prototype.changeStatus = function (newValue) {
        console.log(newValue);
        this.cate.selectedStatus = newValue;
    };
    CategoryManageComponent.prototype.confirmSaveCate = function () {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Do you want to save category?',
            accept: function () {
                //Actual logic to perform a confirmation
                _this.saveCategory();
            }
        });
    };
    CategoryManageComponent.prototype.saveCategory = function () {
        var _this = this;
        this.apiService
            .post("/category/savecategory", this.cate)
            .subscribe(function (res) { return _this.saveCategoryDoneAction(res); }, function (error) { return _this.saveCategoryErrorAction(error); });
    };
    CategoryManageComponent.prototype.saveCategoryDoneAction = function (res) {
        if (res.status === true) {
            this.msgs = [];
            this.msgs.push({ severity: 'success', summary: 'Save data seccess' });
            this.reset();
        }
        else {
            console.log("can't save");
        }
    };
    CategoryManageComponent.prototype.saveCategoryErrorAction = function (error) {
        var _this = this;
        this.error = error.message;
        console.log("error = ", this.error);
        // this.toastr.warning('บันทึกข้อมูลไม่สำเร็จ', 'Oops!');
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Success!', detail: 'บันทึกข้อมูลสำเร็จ' });
        setTimeout(function () { return _this.error = null; }, 4000);
    };
    CategoryManageComponent.prototype.reset = function () {
        this.cate = {
            cateId: "",
            cateName: "",
            cateDescription: "",
            selectedStatus: "Y"
        };
    };
    CategoryManageComponent.prototype.getCategoryByid = function (id) {
        var _this = this;
        var param = {
            cate_id: id
        };
        this.apiService
            .post("/category/getcategorybyid", param)
            .subscribe(function (res) { return _this.getCategoryByidDoneAction(res); }, function (error) { return _this.getCategoryByidErrorAction(error); });
    };
    CategoryManageComponent.prototype.getCategoryByidDoneAction = function (res) {
        if (res.status === true) {
            // console.log(res);
            var cateResData = res.data[0];
            this.cate.cateId = cateResData._id;
            this.cate.cateName = cateResData.cate_name;
            this.cate.cateDescription = cateResData.cate_description;
            this.cate.selectedStatus = cateResData.status;
        }
        else {
            console.log("No data");
        }
    };
    CategoryManageComponent.prototype.getCategoryByidErrorAction = function (error) {
        this.error = error.message;
        console.log("error = ", this.error);
    };
    CategoryManageComponent = __decorate([
        core_1.Component({
            selector: "catagory_edit",
            templateUrl: "modules/category/category_manage/category_manage.html",
            styleUrls: ["modules/category/category_manage/category_manage.css"],
            providers: [primeng_1.ConfirmationService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, api_service_1.ApiService, pmsln_service_1.pmslnService, menu_service_1.MenuService, core_1.ElementRef, primeng_1.ConfirmationService])
    ], CategoryManageComponent);
    return CategoryManageComponent;
}());
exports.CategoryManageComponent = CategoryManageComponent;
//# sourceMappingURL=category_manage.component.js.map
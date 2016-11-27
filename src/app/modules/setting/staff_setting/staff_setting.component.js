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
var api_service_1 = require("../../../service/api.service");
var pmsln_service_1 = require("../../../service/pmsln.service");
var rootscope_service_1 = require("../../../service/rootscope.service");
var StaffSetting = (function () {
    function StaffSetting(apiService, permission, $rootScope, _elRef) {
        this.apiService = apiService;
        this.permission = permission;
        this.$rootScope = $rootScope;
        this._elRef = _elRef;
    }
    StaffSetting.prototype.ngOnInit = function () {
        this.permission.isLogin();
        console.log("staff_setting.component");
        this.storage = localStorage;
        this.getStaffFromStorage();
    };
    StaffSetting.prototype.getStaffFromStorage = function () {
        if (this.storage.getItem('logindata')) {
            var logindata = JSON.parse(this.storage.getItem('logindata'));
            this.staffData = logindata;
            // console.log("staff = ", this.staffData);
            this.staffName = this.staffData.display_name;
            this.staffUserName = this.staffData.login_name;
            this.staffId = this.staffData._id;
            this.password = this.staffData.password;
        }
    };
    StaffSetting.prototype.updateStaff = function () {
        var _this = this;
        var param = {
            name: this.staffName,
            user: this.staffData.login_name,
            id: this.staffId,
            password: this.password
        };
        this.apiService
            .post("/login/updatestaff", param)
            .subscribe(function (res) { return _this.updateStaffDoneAction(res); }, function (error) { return _this.updateStaffErrorAction(error); });
    };
    StaffSetting.prototype.updateStaffDoneAction = function (res) {
        if (res.status === true) {
            var loginData = JSON.stringify(res.data[0]);
            this.storage.setItem('logindata', loginData);
            // this.$rootScope.loginShow('{"isShow": {"hiddenLogin":false,"loginPading":"225px","class10":true}}');
            this.$rootScope.loginShow({ hiddenLogin: false, loginPading: "225px", class10: true });
            // console.log("Change data complete!");
            // this.toastr.success('Change data complete!', 'Success!');
            this.msgs = [];
            this.msgs.push({ severity: 'success', summary: 'Success!', detail: 'บันทึกข้อมูลสำเร็จ' });
        }
        else {
            console.log("can't change");
        }
    };
    StaffSetting.prototype.updateStaffErrorAction = function (error) {
        var _this = this;
        this.error = error.message;
        console.log("error = ", this.error);
        setTimeout(function () { return _this.error = null; }, 4000);
    };
    StaffSetting = __decorate([
        core_1.Component({
            selector: "staffsetting",
            templateUrl: "modules/setting/staff_setting/staff_setting.component.html"
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService, pmsln_service_1.pmslnService, rootscope_service_1.RootScopeService, core_1.ElementRef])
    ], StaffSetting);
    return StaffSetting;
}());
exports.StaffSetting = StaffSetting;
//# sourceMappingURL=staff_setting.component.js.map
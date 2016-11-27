"use strict";
var router_1 = require('@angular/router');
var staff_setting_component_1 = require('./staff_setting/staff_setting.component');
// import { CategoryManageComponent } from './category_manage/category_manage.component';
exports.routes = [
    { path: 'setting', component: staff_setting_component_1.StaffSetting },
];
exports.routing = router_1.RouterModule.forChild(exports.routes);
//# sourceMappingURL=setting.routing.js.map
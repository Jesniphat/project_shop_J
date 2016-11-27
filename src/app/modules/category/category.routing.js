"use strict";
var router_1 = require('@angular/router');
var category_list_component_1 = require('./category_list/category_list.component');
var category_manage_component_1 = require('./category_manage/category_manage.component');
// import { FormComponent } from "./form/form.component";
exports.routes = [
    { path: 'category_list', component: category_list_component_1.CategoryListComponent, pathMatch: "full" },
    { path: 'category_list/create_cate/:id', component: category_manage_component_1.CategoryManageComponent }
];
exports.routing = router_1.RouterModule.forChild(exports.routes);
//# sourceMappingURL=category.routing.js.map
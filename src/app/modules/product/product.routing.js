"use strict";
var router_1 = require('@angular/router');
var product_list_component_1 = require('./product_list/product_list.component');
var product_manage_component_1 = require('./product_manage/product_manage.component');
var product_pic_component_1 = require('./product_pic/product_pic.component');
exports.routes = [
    { path: 'product_list', component: product_list_component_1.ProductListComponent, pathMatch: "full" },
    { path: 'product_list/product/:id', component: product_manage_component_1.ProductManageComponent },
    { path: 'product_list/product_pic/:id', component: product_pic_component_1.ProductPicComponent }
];
exports.routing = router_1.RouterModule.forChild(exports.routes);
//# sourceMappingURL=product.routing.js.map
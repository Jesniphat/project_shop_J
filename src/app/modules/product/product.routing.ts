import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product_list/product_list.component';
import { ProductManageComponent } from './product_manage/product_manage.component';
import { ProductPicComponent } from './product_pic/product_pic.component';

export const routes: Routes = [
    { path: 'product_list', component: ProductListComponent, pathMatch: "full" },
    { path: 'product_list/product/:id', component: ProductManageComponent },
    { path: 'product_list/product_pic/:id', component: ProductPicComponent}
];

export const routing = RouterModule.forChild(routes);

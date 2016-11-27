import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { DataTableModule, ButtonModule,
  SplitButtonModule, InputTextModule,
  InputTextareaModule, DropdownModule,
  FileUploadModule, PanelModule, 
  ConfirmDialogModule, DialogModule, 
  MessagesModule, GrowlModule } from 'primeng/primeng';

import { routing } from "./product.routing";
import { SharedModule } from "../../shared/shared.module";
import { ProductListComponent } from "./product_list/product_list.component";
import { ProductManageComponent } from './product_manage/product_manage.component';
import { ProductPicComponent } from './product_pic/product_pic.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        DataTableModule,
        ButtonModule,
        SplitButtonModule,
        InputTextModule,
        InputTextareaModule,
        PanelModule,
        DropdownModule,
        FileUploadModule,
        ConfirmDialogModule,
        MessagesModule,
        GrowlModule,
        DialogModule,
        HttpModule,

        routing,
        SharedModule.forRoot()
    ],
    declarations: [ 
        ProductListComponent , 
        ProductManageComponent,
        ProductPicComponent
    ],
    bootstrap:    [ ProductListComponent ],
})
export class ProductModule { }

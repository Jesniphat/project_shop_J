import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { DataTableModule, ButtonModule,
  SplitButtonModule, InputTextModule,
  InputTextareaModule, DropdownModule,
  FileUploadModule, PanelModule,
  ConfirmDialogModule, MessagesModule, 
  GrowlModule } from 'primeng/primeng';

import { routing } from "./category.routing";
import { SharedModule } from "../../shared/shared.module";
import { CategoryListComponent } from "./category_list/category_list.component";
import { CategoryManageComponent } from './category_manage/category_manage.component';
import { filterTest } from "../../pipes/testfilter.pipes";
// import { FormComponent } from "./form/form.component";
// import { ProfileComponent } from "./profile/profile.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        DataTableModule,
        ButtonModule,
        SplitButtonModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        FileUploadModule,
        PanelModule,
        HttpModule,
        ConfirmDialogModule,
        MessagesModule,
        GrowlModule,
        routing,
        SharedModule.forRoot()
    ],
    // exports: [ ProfileComponent ],
    declarations: [ 
        CategoryListComponent, 
        CategoryManageComponent,
        filterTest
    ],
    bootstrap:    [ CategoryListComponent ],
})
export class CategoryModule { }

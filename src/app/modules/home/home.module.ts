import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
// import { NgSemanticModule } from "ng-semantic";
import { CommonModule } from "@angular/common";
import { InputTextModule } from 'primeng/primeng';

import { HomeComponent } from "./home.component";
import { routing } from "./home.routing";
import { SharedModule } from "../../shared/shared.module";
// import { ContactModule } from "../contact/contact.module";

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        InputTextModule,
        routing,
        SharedModule.forRoot(),
        // NgSemanticModule,
        // ContactModule
    ],
    declarations: [
        HomeComponent
    ],
    bootstrap: [
        HomeComponent
    ]
})
export class HomeModule {}

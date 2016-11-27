import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { provideAuth } from "angular2-jwt";
import { HttpModule } from "@angular/http";
import { MenuModule, MenubarModule, PanelMenuModule, MenuItem, InputTextModule, 
         MessagesModule, GrowlModule } from 'primeng/primeng';

import { AppComponent }  from './app.component';
import { MenuComponent } from "./components/menu/menu.component";
import { TopbarComponent } from "./components/topbar/topbar.component";
import { LoginModule } from "./modules/login/login.module";
import { routing } from "./routes";
import { HomeModule } from "./modules/home/home.module";
import { SettingModule } from "./modules/setting/setting.module";
import { CategoryModule } from "./modules/category/category.module";
import { ProductModule } from "./modules/product/product.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
    imports: [
        ////////////////////// system module//////////////////////////
        BrowserModule,
        FormsModule,
        HttpModule,
        InputTextModule,
        MenuModule,
        MenubarModule,
        PanelMenuModule,
        MessagesModule,
        GrowlModule,
        ////////////////////// custom module//////////////////////////
        LoginModule,
        HomeModule,
        SettingModule,
        CategoryModule,
        ProductModule,
        routing,
        SharedModule.forRoot()
    ],
    // providers: [
    //     provideAuth({
    //         globalHeaders: [{"Content-type": "application/json"}],
    //         newJwtError: true,
    //         noTokenScheme: true
    //     })
    // ],
    declarations: [
        MenuComponent,
        TopbarComponent,
        AppComponent
    ],
    bootstrap: [ AppComponent ],
    schemas: [
        // CUSTOM_ELEMENTS_SCHEMA
    ]

})
export class AppModule { }

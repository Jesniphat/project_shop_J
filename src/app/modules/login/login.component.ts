import { Component, Inject, NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MenuService } from "../../service/menu.service";
import { ApiService } from "../../service/api.service";
import { RootScopeService } from "../../service/rootscope.service";

@Component({
    selector: "home",
    templateUrl: "login.component.html"
})
export class LoginComponent {
    error: string;
    response: {};
    password: any;
    username: any;
    private storage: any;

    constructor(private apiService: ApiService, private menuservice: MenuService, private $rootScope: RootScopeService) {
      this.storage = localStorage;
    }

    ngOnInit() {
        this.apiService
            .get("/api/login/login")
            .subscribe(
                res => this.getLoginDoneAction(res),
                error => this.getLoginErrorAction(error)
            );
        // this.$rootScope.loginShow('{"isShow": {"hiddenLogin":true,"loginPading":"0px","class10":false}}');
        this.$rootScope.loginShow({hiddenLogin:true,loginPading:"0px",class10:false});
    }

    getLoginDoneAction(res:any){
        // console.log("res login = ", res);
    }

    getLoginErrorAction(error:any){
        this.error = error.message;
    }

    login(){
        let param = {
            user: this.username,
            password: this.password
        }
        // console.log(param);
        this.apiService
            .post("/api/login/login", param)
            .subscribe(
                res => this.loginDoneAction(res),
                (error) => this.loginErrorAction(error)
            )
    }

    loginDoneAction(res:any){
         // console.log(" res = ", res);
        if(res.status === true){
            let loginData = JSON.stringify(res.data[0]);
            this.storage.setItem('logindata',loginData);
            window.location.href = "#/home";
            // this.$rootScope.loginShow('{"isShow": {"hiddenLogin":false,"loginPading":"225px","class10":true}}');
            this.$rootScope.loginShow({hiddenLogin:false, loginPading:"225px",class10:true});
            // window.location.reload();
        } else {
            console.log("can't login");
        }
    }

    loginErrorAction(error:any){
        this.error = error.message;
        console.log("error = ", this.error);
        // setTimeout(() => this.error = null, 4000);
    }
}

import { Component, ViewChild } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import { RootScopeService } from "./service/rootscope.service";
// import { SemanticPopupComponent } from "ng-semantic";
import "rxjs/add/operator/map";

@Component({
    selector: "app",
    templateUrl: "./app.component.html"
})
export class AppComponent {

    hiddenLogin: any = true;
    loginPading: any = "225px";
    appName: string = "Angular 2 Express";
    myClass10: any = true;
    user: any = {
        password: "angualr2express",
        username: "john"
    };
    response: Response;
    isLogged: boolean;
    // @ViewChild("myPopup") myPopup: SemanticPopupComponent;

    constructor(private http: Http, private $rootScope: RootScopeService) {
        this.isLogged = !!localStorage.getItem("id_token");
        this.$rootScope.showNav$.subscribe(data => this.showNav(data));
    }

    logout(): void {
        localStorage.removeItem("id_token");
        location.reload();
    }

    ngOnInit(){
      // console.log("check login");
      let user: any = "";
      this.http
            .get("/api/login/checkLogin")
            .map((res: Response) => res.json())
            .subscribe(
                res => this.checkLoginDoneAction(res),
                error => this.checkLoginErrorAction(error)
            );
    }

    checkLoginDoneAction(res:any){
        if(res.status){
            this.hiddenLogin = false;
            this.loginPading = "225px";
            this.myClass10 = true;
        }else{
            this.hiddenLogin = true;
            this.loginPading = "0px";
            this.myClass10 = false;
            window.location.href = "#/login";
        }
    }

    checkLoginErrorAction(error:any){
        console.log(error);
    }

    showNav(obj:any){
      if(obj != "" && obj != undefined && obj != {}){
        // let show = JSON.parse(obj);
        // this.hiddenLogin = show.isShow.hiddenLogin;
        // this.myClass10 = show.isShow.class10;
        // // console.log("10 = ", this.myClass10);
        // this.loginPading = show.isShow.loginPading;

        // console.log("obj = ", obj);
        let show = obj;
        this.hiddenLogin = show.hiddenLogin;
        this.myClass10 = show.class10;
        this.loginPading = show.loginPading;
      }
    }
}

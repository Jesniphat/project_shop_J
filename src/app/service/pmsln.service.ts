import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import "rxjs/add/operator/map";


@Injectable()
export class pmslnService {
  
  constructor(private http: Http) {
      // console.log("check some thing");
  }

  isLogin(){
      //console.log("service check login");
      //let config = new RequestOptions({headers: new Headers({"Content-Type": "application/json"})});
      this.http
            .get("/api/login/checkLogin")
            .map((res: Response) => res.json())
            .subscribe(
                res => this.isLoginDoneAction(res),
                error => this.isLoginErrorAction(error)
            );

    }

    isLoginDoneAction(res:any){
        // console.log("res = ", res);
        if(!res.status){
            window.location.href = "#/login";
        }
    }

    isLoginErrorAction(error:any){
        console.log(error); 
    }
}
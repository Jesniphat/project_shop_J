import { Component, Input, ElementRef } from "@angular/core";
import { Router } from '@angular/router';
import { ApiService } from "../../../service/api.service";
import { MenuService } from "../../../service/menu.service";
import { pmslnService } from "../../../service/pmsln.service";
declare var $ : any;

@Component({
    selector: "catagory",
    templateUrl: "category_list.html",
})
export class CategoryListComponent {
    private item = 1;
    private error:string = "";
    private query:string = "";
    private categoryLists:any = [];
    private categorys:any = [];
    private cols:any = ["cate_name","cate_description","product_qty","status"];

    private testPipes = "";

    constructor( private router: Router,
        private apiService: ApiService ,
        private _navService: MenuService,
        private permission: pmslnService,
        private _elRef: ElementRef) {
            
    }

    ngOnInit(){
      this.permission.isLogin();
      console.log("category_list.component");

      this.getCategoryList();
    }

    getCategoryList(){
      let param = {"id":"ทดสอบ"}
      this.apiService
          .post("/api/category/category_list",param)
          .subscribe(
            data => this.getCategoryDoneAction(data), // OR this.categoryLists = data.data,
            error => this.errorAction(error) 
           );
    }

    getCategoryDoneAction(data:any){
        // console.log("data = ", data);
        this.categoryLists = data.data;
    }

    errorAction(error:any){
        this.error = error.message;
        console.log("errer = ", this.error);
    }

    add_new_category(data:any){
        // console.log("add new cate = ", data);
        let link: any;
        if(data == 'create'){
            link = ['/category_list/create_cate', data];
        }else{
            link = ['/category_list/create_cate', data._id];
        }
        this.router.navigate(link);
    }

    clickme(md:any){
        console.log(md);
        $(this._elRef.nativeElement).find('#me').removeClass("a");
        $(this._elRef.nativeElement).find('#me').addClass("intro");
    }
}

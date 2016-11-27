import { Component, Input, ElementRef } from "@angular/core";
import { Router } from '@angular/router';
import { ApiService } from "../../../service/api.service";
import { pmslnService } from "../../../service/pmsln.service";
declare var $ : any;

@Component({
    selector: "product-list",
    templateUrl: "product_list.html",
})
export class ProductListComponent {

    private error:any;
    private productLists:any[];
    private cols = ["product_name","product_description","product_qty","product_price"];


    constructor( private router: Router,
        private apiService: ApiService ,
        private permission: pmslnService,
        private _elRef: ElementRef) {

    }

    ngOnInit(){
      this.permission.isLogin();
      console.log("product_list.component");

      this.getAllProduct();
    }

    add_new_product(data:any){
        let link: any;
        if(data == 'create'){
            link = ['/product_list/product', data];
        }
        else{
            link = ['/product_list/product', data._id];
        }
        this.router.navigate(link);
    }

    viwe_product_pic(data:any){
        let link: any;
        console.log("Product Pic = ", data);
        link = ['/product_list/product_pic/', data._id];
        this.router.navigate(link);
    }

    getAllProduct(){
        let param = {"id":"สินค้าทั้งหมด"}
        this.apiService
            .post("/api/product/product_list",param)
            .subscribe(
                data => this.productLists = data.data,
                error => this.getAllProductErrorAction(error)
            );
    }

    getAllProductErrorAction(error:any){
        this.error = error.message;
        console.log("errer = ", this.error);
    }

}

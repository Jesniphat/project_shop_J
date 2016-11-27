import { Component, Input, ElementRef } from "@angular/core";
import { Router,ActivatedRoute } from '@angular/router';
import { ConfirmationService } from 'primeng/primeng';
import { ApiService } from "../../../service/api.service";
import { MenuService } from "../../../service/menu.service";
import { pmslnService } from "../../../service/pmsln.service";
declare var $ : any;

@Component({
    selector: "product_pic_edit",
    templateUrl: "product_pic.html",
    providers: [ConfirmationService]
    // styleUrls: ["modules/category/category_manage/category_manage.css"]
})
export class ProductPicComponent{

    private error:any;
    private product:any = {
        id : ""
    };

    private product_pic:any[];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private apiService: ApiService ,
        private permission: pmslnService,
        private _navService: MenuService,
        private _elRef: ElementRef,
        private confirmationService: ConfirmationService ) {

    }

    ngOnInit(){
        this.permission.isLogin();
        console.log("product_pic.component");

        this.product.id = this.route.snapshot.params['id'];
        console.log("Product Id = ",this.product.id);
        this.getProductPicById(this.product.id);
    }

    getProductPicById(id:any){
        let param = {
            product_id: id
        };
        this.apiService
            .post("/api/product/getproductbyid", param)
            .subscribe(
                res => this.getProductPicByIdDoneAction(res),
                error => this.getProductPicByIdErrorAction(error)
            );
    }

    getProductPicByIdDoneAction(res:any){
        if(res.status === true){
            // console.log(res);
            this.product_pic = [];
            let productResData = res.data[0];
            let localpic = "./uploads/product_pic/";
            for(let i = 0; i < productResData['product_pic'].length; i++) {
                this.product_pic.push({
                    product_pic: localpic + productResData['product_pic'][i]
                });
            }
            console.log("Pic data = ", this.product_pic);
        } else {
            console.log("No data");
        }
    }

    getProductPicByIdErrorAction(error:any){
        this.error = error.message;
        console.log("error = ", this.error);
    }


}
import { Component, Input, ElementRef } from "@angular/core";
import { Router,ActivatedRoute } from '@angular/router';
import { ConfirmationService } from 'primeng/primeng';
import { ApiService } from "../../../service/api.service";
import { MenuService } from "../../../service/menu.service";
import { pmslnService } from "../../../service/pmsln.service";
declare var $ : any;

@Component({
    selector: "product_edit",
    templateUrl: "product_manage.html",
    providers: [ConfirmationService]
    // styleUrls: ["modules/category/category_manage/category_manage.css"]
})
export class ProductManageComponent {
    private error:string = "";
    
    private product = {
        id : "",
        name: "",
        desc: "",
        price: 0,
        qty: 0,
        picName:<any>[]
    }
    private statusLists = [{label:'Active', value:'Y'},
                           {label:'Unactive', value:'N'}];
    private selectedStatus:any = "Y";
    private productPicName:any[] = [];
    private uploadedFiles: any[] = [];
    private msgs:any;

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
        console.log("product_managet.component");

        this.product.id = this.route.snapshot.params['id'];
        console.log("Product Id = ",this.product.id);
        if(this.product.id != "create"){
            this.getProductByid(this.product.id);
        }

        this.hideUploadBt();
    }

    getProductByid(productId:any){
        let param = {
            product_id: productId
        };
        this.apiService
            .post("/api/product/getproductbyid", param)
            .subscribe(
                res => this.getProductByidDoneAction(res),
                error => this.getProductByidErrorAction(error)
            )
    }

    getProductByidDoneAction(res){
        // console.log(res);
        if(res.status === true){
            // console.log(res);
            let prodResData = res.data[0];
            this.product.id = prodResData._id;
            this.product.name = prodResData.product_name;
            this.product.desc = prodResData.product_description;
            this.product.price = prodResData.product_price;
            this.product.qty = prodResData.product_qty;
            this.product.picName = prodResData.product_pic;

            console.log("this.product = ", this.product);
            for( let x = 0; x < prodResData.product_pic.length; x++){
                // this.product.picName.push(prodResData.product_pic[x]);
                this.uploadedFiles.push({name: prodResData.product_pic[x]});
            }
        }   
    }

    getProductByidErrorAction(error){
        console.log(error);
    }

    changeStatus(newValue:any) {
        console.log(newValue);
        this.selectedStatus = newValue;
    }

    onUploaded(event:any){
        console.log("onUploaded = ", event);
        console.log("get xhr = ", JSON.parse(event.xhr.response));
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }
        let pic_name = JSON.parse(event.xhr.response);
        if(pic_name.status === true){
            this.product.picName.push(pic_name.fileName);
        } else {
            console.log("error = ", pic_name.exMessage);
            // this.toastr.warning('บันทึกรูปภาพไม่สำเร็จกรุณาลองใหม่อีกครั้ง', 'Oops!');
            this.msgs = [];
            this.msgs.push({severity:'warn', summary:'Oops!', detail:'บันทึกรูปภาพไม่สำเร็จกรุณาลองใหม่อีกครั้ง'});
        }
    }

    onUploadedError(event:any){
        console.log("upload error = ", event);
        // this.toastr.warning('บันทึกรูปภาพไม่สำเร็จกรุณาลองใหม่อีกครั้ง', 'Oops!');
        this.msgs = [];
        this.msgs.push({severity:'warn', summary:'Oops!', detail:'บันทึกรูปภาพไม่สำเร็จกรุณาลองใหม่อีกครั้ง'});
    }

    hideUploadBt(){
      $(this._elRef.nativeElement).find("[label=Upload]").css({"display": "none"});
      $(this._elRef.nativeElement).find("[label=Cancel]").css({"display": "none"});
      $(this._elRef.nativeElement).find("#cancelAll").css({"display": "inherit"});
    }

    checkBeforSave(){
        if((this.product.picName).length == 0){
            this.confirmationService.confirm({
                message: "You doesn't upload product picture. Do you want to save this product?",
                accept: () => {
                    //Actual logic to perform a confirmation
                    this.saveProduct();
                }
            });
        } else {
            this.confirmationService.confirm({
                message: 'Are you sure that you want to save this product?',
                accept: () => {
                    //Actual logic to perform a confirmation
                    this.saveProduct();
                }
            });
        }
    }

    saveProduct(){
        console.log("save product");
        this.apiService
            .post("/api/product/saveproduct", this.product)
            .subscribe(
                res => this.saveProductDoneAction(res),
                error => this.saveProductErrorAction(error)
            )
    }

    saveProductDoneAction(res:any){
        console.log("res = ", res);
        if(res.status === true){
            // this.toastr.success('บันทึกข้อมูลสำเร็จ', 'Success!');
            this.msgs = [];
            this.msgs.push({severity:'success', summary:'Success!', detail:'บันทึกข้อมูลสำเร็จ'});
            this.reset();
        } else {
            console.log("can't save ", res.error);
            // this.toastr.warning('บันทึกข้อมูลไม่สำเร็จ', 'Oops!');
            this.msgs = [];
            this.msgs.push({severity:'warn', summary:'Oops!', detail:'บันทึกข้อมูลไม่สำเร็จ'});
        }
    }

    saveProductErrorAction(error:any){
        this.error = error.message;
        console.log("error = ", this.error);
        // this.toastr.warning('บันทึกข้อมูลไม่สำเร็จ', 'Oops!');
        this.msgs = [];
        this.msgs.push({severity:'warn', summary:'Oops!', detail:'บันทึกข้อมูลไม่สำเร็จ'});
    }

    onSubmit(value:any){
        console.log("value submit = ", value);
    }

    reset(){
        this.product = {
            id : "",
            name: "",
            desc: "",
            price: 0,
            qty: 0,
            picName: []
        }
        this.uploadedFiles = [];
    }
}

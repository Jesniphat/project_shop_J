import { resetFakeAsyncZone } from '@angular/core/testing';
import { Component, Input, ElementRef } from "@angular/core";
import { Router,ActivatedRoute } from '@angular/router';
import { ConfirmationService } from 'primeng/primeng';
import { ApiService } from "../../../service/api.service";
import { MenuService } from "../../../service/menu.service";
import { pmslnService } from "../../../service/pmsln.service";
declare var $ : any;

@Component({
    selector: "catagory_edit",
    templateUrl: "category_manage.html",
    styleUrls: ["category_manage.css"],
    providers: [ConfirmationService]
})
export class CategoryManageComponent {
    private error:string = "";
    private cate = {
        cateId: "",
        cateName: "",
        cateDescription: "",
        selectedStatus: "Y"
    }
    private statusLists = [{label:'Active', value:'Y'},
                           {label:'Unactive', value:'N'}];

    private msgs:any;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private apiService: ApiService ,
        private permission: pmslnService,
        private _navService: MenuService,
        private _elRef: ElementRef,
        private confirmationService: ConfirmationService) {

    }

    ngOnInit(){
        this.permission.isLogin();
        console.log("category_managet.component");

        this.cate.cateId = this.route.snapshot.params['id'];
        //   console.log(this.cateId);
        if(this.cate.cateId != "create"){
            this.getCategoryByid(this.cate.cateId);
        }
        // this.hideSomeBt();
    }

    changeStatus(newValue:any) {
        console.log(newValue);
        this.cate.selectedStatus = newValue;
    }

    confirmSaveCate(){
        this.confirmationService.confirm({
            message: 'Do you want to save category?',
            accept: () => {
                //Actual logic to perform a confirmation
                this.saveCategory();
            }
        });
    }

    saveCategory(){
        this.apiService
            .post("/api/category/savecategory", this.cate)
            .subscribe(
                res => this.saveCategoryDoneAction(res),
                error => this.saveCategoryErrorAction(error)
            )
    }

    saveCategoryDoneAction(res:any){
        if(res.status === true){
            this.msgs = [];
            this.msgs.push({severity:'success', summary:'Save data seccess'});
            this.reset();
        } else {
            console.log("can't save");
        }
    }

    saveCategoryErrorAction(error:any){
        this.error = error.message;
        console.log("error = ", this.error);
        // this.toastr.warning('บันทึกข้อมูลไม่สำเร็จ', 'Oops!');
        this.msgs = [];
        this.msgs.push({severity:'success', summary:'Success!', detail:'บันทึกข้อมูลสำเร็จ'});
        setTimeout(() => this.error = null, 4000);
    }

    reset(){
        this.cate = {
            cateId: "",
            cateName: "",
            cateDescription: "",
            selectedStatus: "Y"
        }
    }

    getCategoryByid(id:any){
        let param = {
            cate_id: id
        };
        this.apiService
            .post("/api/category/getcategorybyid", param)
            .subscribe(
                res => this.getCategoryByidDoneAction(res),
                error => this.getCategoryByidErrorAction(error)
            )
    }

    getCategoryByidDoneAction(res:any){
        if(res.status === true){
            // console.log(res);
            let cateResData = res.data[0];
            this.cate.cateId = cateResData._id;
            this.cate.cateName = cateResData.cate_name;
            this.cate.cateDescription = cateResData.cate_description;
            this.cate.selectedStatus = cateResData.status;
        } else {
            console.log("No data");
        }
    }

    getCategoryByidErrorAction(error:any){
        this.error = error.message;
        console.log("error = ", this.error);
    }

    // hideSomeBt(){
    //   $(this._elRef.nativeElement).find("[label=Upload]").css({"display": "none"});
    //   $(this._elRef.nativeElement).find("[label=Cancel]").css({"display": "none"});
    // }
}

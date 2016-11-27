import { Component, Input, ElementRef } from "@angular/core";
import { Router } from '@angular/router';
import { ApiService } from "../../../service/api.service";
import { pmslnService } from "../../../service/pmsln.service";
import { RootScopeService } from "../../../service/rootscope.service";
declare var $ : any;

@Component({
    selector: "staffsetting",
    templateUrl: "staff_setting.component.html"
})

export class StaffSetting {
    private storage: any;
    private staffId: any;
    private password: string;
    private staffData: any;
    private staffName: string;
    private staffUserName: string;
    private error: any;
    private msgs:any;

    constructor(
      private apiService:ApiService,
      private permission:pmslnService,
      private $rootScope:RootScopeService,
      private _elRef: ElementRef){

    }

    ngOnInit(){
        this.permission.isLogin();
        console.log("staff_setting.component");

        this.storage = localStorage;
        this.getStaffFromStorage();
    }

    getStaffFromStorage(){
        if(this.storage.getItem('logindata')){
            let logindata = JSON.parse(this.storage.getItem('logindata'));
            this.staffData = logindata;
            // console.log("staff = ", this.staffData);

            this.staffName = this.staffData.display_name;
            this.staffUserName = this.staffData.login_name;
            this.staffId = this.staffData._id;
            this.password = this.staffData.password
        }
    }

    updateStaff(){
        let param = {
          name: this.staffName,
          user: this.staffData.login_name,
          id: this.staffId,
          password: this.password
        }
        this.apiService
            .post("/api/login/updatestaff", param)
            .subscribe(
                res => this.updateStaffDoneAction(res),
                error => this.updateStaffErrorAction(error)
            )
    }

    updateStaffDoneAction(res:any){
        if(res.status === true){
            let loginData = JSON.stringify(res.data[0]);
            this.storage.setItem('logindata',loginData);
            // this.$rootScope.loginShow('{"isShow": {"hiddenLogin":false,"loginPading":"225px","class10":true}}');
            this.$rootScope.loginShow({hiddenLogin:false, loginPading:"225px",class10:true});
            // console.log("Change data complete!");
            // this.toastr.success('Change data complete!', 'Success!');
            this.msgs = [];
            this.msgs.push({severity:'success', summary:'Success!', detail:'บันทึกข้อมูลสำเร็จ'});
        } else {
            console.log("can't change");
        }
    }

    updateStaffErrorAction(error:any) {
        this.error = error.message;
        console.log("error = ", this.error);
        setTimeout(() => this.error = null, 4000);
    }
}

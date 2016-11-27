import { Component, Input, ElementRef } from "@angular/core";
import { MenuService } from "../../service/menu.service";
import { RootScopeService } from "../../service/rootscope.service";
import { Subscription } from 'rxjs/Subscription';
declare var $ : any;

@Component({
    selector: "topbar",
    templateUrl: 'topbar.component.html',
    styleUrls: ['topbar.component.css']
})
export class TopbarComponent {
    private storage: any;
    private staffData:any;
    private display_name: any;
    private menuId: any[];
    private dropDownMenu: any;

    constructor(private $rootScope:RootScopeService, private _elRef: ElementRef){
        this.storage = localStorage;
    }

    ngOnInit() {
        this.$rootScope.showNav$.subscribe(data => this.setUserData(data));

        if(this.storage.getItem('logindata')){
        let logindata = JSON.parse(this.storage.getItem('logindata'));
        this.staffData = logindata;
        this.display_name = logindata.display_name;
        // console.log("staff = ", this.staffData);
      }

    //   this.menuId = $(this._elRef.nativeElement).find('.menu');
    }

    setUserData(obj:any){
      // console.log("do ever");
      if(this.storage.getItem('logindata')){
        let logindata = JSON.parse(this.storage.getItem('logindata'));
        this.staffData = logindata;
        this.display_name = logindata.display_name;
        // console.log("staff = ", this.staffData);
      }
    }

    logOut(){
      // console.log("Do log out");
      window.location.href = "#/login";
      // location.reload();
    }
}

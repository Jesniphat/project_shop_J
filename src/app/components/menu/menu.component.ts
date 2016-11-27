import { Component, Input, ElementRef } from "@angular/core";
import { MenuItem } from 'primeng/primeng';
import { MenuService } from "../../service/menu.service";
import { RootScopeService } from "../../service/rootscope.service";
import { Subscription } from 'rxjs/Subscription';
declare var $ : any;

@Component({
    selector: "menu",
    templateUrl: "menu.component.html"
})
export class MenuComponent {
    @Input() name: string;
    private test: any;
    private test1: any;
    private menuId: any[];
    private items: MenuItem[];

    subscription:Subscription;

    constructor(private _navService:MenuService, private $rootScope:RootScopeService, private _elRef: ElementRef){}

    ngOnInit() {
      this._navService.navItem$.subscribe(data => this.gensomething(data));
      this.items = [
            {
                label: 'Product',
                icon: 'fa-product-hunt',
                items: [
                    {label: 'Category List', icon: 'fa-tag', routerLink: ['/category_list']},
                    {label: 'Product List', icon: 'fa-tag', routerLink: ['/product_list']}
                ]
            },
            {
                label: 'Edit',
                icon: 'fa-edit',
                items: [
                    {label: 'Undo', icon: 'fa-mail-forward'},
                    {label: 'Redo', icon: 'fa-mail-reply'}
                ]
            },
            {
                label: 'Help',
                icon: 'fa-question',
                items: [
                    {
                        label: 'Contents'
                    },
                    {
                        label: 'Search',
                        icon: 'fa-search',
                        items: [
                            {
                                label: 'Text',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File'
                            }
                    ]}
                ]
            },
            {
                label: 'Actions',
                icon: 'fa-gear',
                items: [
                    {
                        label: 'Edit',
                        icon: 'fa-refresh',
                        items: [
                            {label: 'Save', icon: 'fa-save'},
                            {label: 'Update', icon: 'fa-save'},
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'fa-phone',
                        items: [
                            {label: 'Delete', icon: 'fa-minus'}
                        ]
                    }
                ]
            }
        ];
    }

    gensomething(od:any){
        if(od != "" && od != undefined){
          console.log(od);
          this.test1 = od;
          console.log(JSON.parse(this.test1));
          this.test = JSON.parse(od).employees;
        }
    }

    menuClick(idName:any){
      for (let i=0; i < this.menuId.length; i++){
        $(this._elRef.nativeElement).find('#'+this.menuId[i].id).css({'background':'','color':''});
        if(this.menuId[i].id == idName){
          $(this._elRef.nativeElement).find('#'+this.menuId[i].id).css({'background':'#000','color':'#fff'});
        }
      }
    }

}

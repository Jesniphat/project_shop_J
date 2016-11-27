"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var menu_service_1 = require("../../service/menu.service");
var rootscope_service_1 = require("../../service/rootscope.service");
var MenuComponent = (function () {
    function MenuComponent(_navService, $rootScope, _elRef) {
        this._navService = _navService;
        this.$rootScope = $rootScope;
        this._elRef = _elRef;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._navService.navItem$.subscribe(function (data) { return _this.gensomething(data); });
        this.items = [
            {
                label: 'Product',
                icon: 'fa-product-hunt',
                items: [
                    { label: 'Category List', icon: 'fa-tag', routerLink: ['/category_list'] },
                    { label: 'Product List', icon: 'fa-tag', routerLink: ['/product_list'] }
                ]
            },
            {
                label: 'Edit',
                icon: 'fa-edit',
                items: [
                    { label: 'Undo', icon: 'fa-mail-forward' },
                    { label: 'Redo', icon: 'fa-mail-reply' }
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
                        ] }
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
                            { label: 'Save', icon: 'fa-save' },
                            { label: 'Update', icon: 'fa-save' },
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'fa-phone',
                        items: [
                            { label: 'Delete', icon: 'fa-minus' }
                        ]
                    }
                ]
            }
        ];
    };
    MenuComponent.prototype.gensomething = function (od) {
        if (od != "" && od != undefined) {
            console.log(od);
            this.test1 = od;
            console.log(JSON.parse(this.test1));
            this.test = JSON.parse(od).employees;
        }
    };
    MenuComponent.prototype.menuClick = function (idName) {
        for (var i = 0; i < this.menuId.length; i++) {
            $(this._elRef.nativeElement).find('#' + this.menuId[i].id).css({ 'background': '', 'color': '' });
            if (this.menuId[i].id == idName) {
                $(this._elRef.nativeElement).find('#' + this.menuId[i].id).css({ 'background': '#000', 'color': '#fff' });
            }
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MenuComponent.prototype, "name", void 0);
    MenuComponent = __decorate([
        core_1.Component({
            selector: "menu",
            templateUrl: "./components/menu/menu.component.html"
        }), 
        __metadata('design:paramtypes', [menu_service_1.MenuService, rootscope_service_1.RootScopeService, core_1.ElementRef])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map
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
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
exports.TRISTATECHECKBOX_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return TriStateCheckbox; }),
    multi: true
};
var TriStateCheckbox = (function () {
    function TriStateCheckbox() {
        this.onChange = new core_1.EventEmitter();
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    TriStateCheckbox.prototype.onClick = function (event, input) {
        if (!this.disabled) {
            this.toggle(event);
            this.focus = true;
            input.focus();
        }
    };
    TriStateCheckbox.prototype.onKeydown = function (event) {
        if (event.keyCode == 32) {
            event.preventDefault();
        }
    };
    TriStateCheckbox.prototype.onKeyup = function (event) {
        if (event.keyCode == 32) {
            this.toggle(event);
            event.preventDefault();
        }
    };
    TriStateCheckbox.prototype.toggle = function (event) {
        if (this.value == null)
            this.value = true;
        else if (this.value == true)
            this.value = false;
        else if (this.value == false)
            this.value = null;
        this.onModelChange(this.value);
        this.onChange.emit({
            originalEvent: event,
            value: this.value
        });
    };
    TriStateCheckbox.prototype.onFocus = function () {
        this.focus = true;
    };
    TriStateCheckbox.prototype.onBlur = function () {
        this.focus = false;
        this.onModelTouched();
    };
    TriStateCheckbox.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    TriStateCheckbox.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    TriStateCheckbox.prototype.writeValue = function (value) {
        this.value = value || null;
    };
    TriStateCheckbox.prototype.setDisabledState = function (disabled) {
        this.disabled = disabled;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TriStateCheckbox.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TriStateCheckbox.prototype, "name", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], TriStateCheckbox.prototype, "onChange", void 0);
    TriStateCheckbox = __decorate([
        core_1.Component({
            selector: 'p-triStateCheckbox',
            template: "\n        <div class=\"ui-chkbox ui-tristatechkbox ui-widget\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input #input type=\"text\" [name]=\"name\" readonly [disabled]=\"disabled\" (keyup)=\"onKeyup($event)\" (keydown)=\"onKeydown($event)\" (focus)=\"onFocus()\" (blur)=\"onBlur()\">\n            </div>\n            <div class=\"ui-chkbox-box ui-widget ui-corner-all ui-state-default\" (click)=\"onClick($event,input)\"\n                [ngClass]=\"{'ui-state-hover':hover&&!disabled,'ui-state-active':value!=null,'ui-state-disabled':disabled,'ui-state-focus':focus}\" \n                    (mouseenter)=\"hover=true\" (mouseleave)=\"hover=false\">\n                <span class=\"ui-chkbox-icon fa fa-fw ui-c\" [ngClass]=\"{'fa-check':value==true,'fa-close':value==false}\"></span>\n            </div>\n        </div>\n    ",
            providers: [exports.TRISTATECHECKBOX_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [])
    ], TriStateCheckbox);
    return TriStateCheckbox;
}());
exports.TriStateCheckbox = TriStateCheckbox;
var TriStateCheckboxModule = (function () {
    function TriStateCheckboxModule() {
    }
    TriStateCheckboxModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [TriStateCheckbox],
            declarations: [TriStateCheckbox]
        }), 
        __metadata('design:paramtypes', [])
    ], TriStateCheckboxModule);
    return TriStateCheckboxModule;
}());
exports.TriStateCheckboxModule = TriStateCheckboxModule;
//# sourceMappingURL=tristatecheckbox.js.map
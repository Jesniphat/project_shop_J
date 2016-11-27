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
var FilterTable = (function () {
    function FilterTable() {
        this.temp = [];
        // console.log("check some thing");
    }
    FilterTable.prototype.filter = function (cals, data, find, start, lows) {
        this.temp = [];
        for (var i = 0; i < data.length; i++) {
            if (find == "") {
                this.temp.push(data[i]);
                continue;
            }
            for (var key in data[i]) {
                // console.log("data[i]["+ key +"]="+ data[i][key]);
                var str = data[i][key].toString();
                if (str.indexOf(find) >= 0) {
                    this.temp.push(data[i]);
                    break;
                }
            }
        }
        // console.log(this.temp.slice((start*lows)-lows, start*lows));
        return this.temp.slice((start * lows) - lows, start * lows);
    };
    FilterTable = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], FilterTable);
    return FilterTable;
}());
exports.FilterTable = FilterTable;
//# sourceMappingURL=table.filter.service.js.map
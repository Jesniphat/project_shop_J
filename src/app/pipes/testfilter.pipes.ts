import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ 
    name: 'filterTest', 
    pure: false
})
export class filterTest implements PipeTransform {
  transform(items: any[], args: any): any {
        // console.log("args = ", args);
        // console.log("items = ", items);
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(item => item.cate_name.indexOf(args) !== -1);
    }
}
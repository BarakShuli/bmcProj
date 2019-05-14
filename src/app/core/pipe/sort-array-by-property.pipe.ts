import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortArrayByProperty'
})
export class SortArrayByPropertyPipe implements PipeTransform {

  transform(items: any, propName: any): any {
    return items.sort((firstItem: any, secItem: any) => 
        this.sorterByProperty(firstItem, secItem, propName));
  }

  sorterByProperty(firstItem: object ,secItem: object, propName:string) {
    if (firstItem[propName] < secItem[propName]) {
      return -1;
    } else if (firstItem[propName] > secItem[propName]) {
      return 1;
    } else {
      return 0;
    }
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arr: any[], searchParam: string = ''): any[] {
    if(searchParam === '') return arr;
    else {
      return arr.filter(t => JSON.stringify(t).search(searchParam) > -1);
    }
  }
}

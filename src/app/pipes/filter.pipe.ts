import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: any): any {
    let filterTechnologies = [];
    return filterTechnologies = value.filter((item: any) => item.tech.toLowerCase().includes(args.toLowerCase()));
  }

}

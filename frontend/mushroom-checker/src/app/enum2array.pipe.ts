import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enum2array'
})
export class Enum2arrayPipe implements PipeTransform {

  transform(data: Object) {
    return Object.keys(data);
  }
  

}

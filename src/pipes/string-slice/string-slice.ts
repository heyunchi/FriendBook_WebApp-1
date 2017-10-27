import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringSlice'
})
export class StringSlicePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let len = 40 ;
    // if(value && value.length || args) filter
    if(value && value.length >= len-3){
      return value.substring(0,len-3)+'...';
    }else{
      return value;
    }
  }

}
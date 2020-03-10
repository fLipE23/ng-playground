import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstKeyPipe'
})
export class FirstKeyPipePipe implements PipeTransform {

  transform(value: object, ...args: unknown[]): unknown {
    const keys = Object.keys(value);
    if (keys && keys.length > 0) {
      console.log(keys[0]);
      return keys[0];
    }
    return null;
  }

}




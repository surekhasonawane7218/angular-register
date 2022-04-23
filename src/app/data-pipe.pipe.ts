import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataPipe'
})
export class DataPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

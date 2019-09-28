import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doneItems',
  pure: false
})
export class DoneItemsPipe implements PipeTransform {

  transform(items: any[], args?: any): any {
    return items.filter(item => !item.done);
  }

}

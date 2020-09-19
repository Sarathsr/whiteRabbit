import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userListFilter'
})
export class UserListFilterPipe implements PipeTransform {

  transform(list: any[], filterText: string): any {
    return list ? list.filter(item => item.user.name.first.search(new RegExp(filterText, 'i')) > -1) : [];
  }


}

/**
 *
 *
 *      .oo                    .oo                             .oPYo.  o
 *     .P 8                   .P 8                             8    8
 *    .P  8 .oPYo. .oPYo.    .P  8 .oPYo. o    o odYo. .oPYo. o8YooP' o8 .oPYo. .oPYo.
 *   oPooo8 8    8 8    8   oPooo8 Yb..   8    8 8' `8 8    '  8       8 8    8 8oooo8
 *  .P    8 8    8 8    8  .P    8   'Yb. 8    8 8   8 8    .  8       8 8    8 8.
 * .P     8 8YooP' 8YooP' .P     8 `YooP' `YooP8 8   8 `YooP'  8       8 8YooP' `Yooo'
 * ..:::::..8 ....:8 ....:..:::::..:.....::....8 ..::..:.....::..::::::..8 ....::.....:
 * :::::::::8 :::::8 :::::::::::::::::::::::ooP'.::::::::::::::::::::::::8 ::::::::::::
 * :::::::::..:::::..:::::::::::::::::::::::...::::::::::::::::::::::::::..::::::::::::
 *
 * Fully experimetation, use Angular's in-build async pipe in production code
 *
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appAsync',
  pure: false,
})
export class AppAsyncPipe implements PipeTransform {

  value: any;

  transform(obs: any, ...args: any[]): any {
    obs.subscribe(val => this.value = val);
    return this.value;
  }
}

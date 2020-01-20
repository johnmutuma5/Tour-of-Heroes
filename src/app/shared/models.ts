import { Observable } from 'rxjs';

export interface HasCanDeactivate {
  canDeactivate: () => Observable<boolean> | boolean;
}


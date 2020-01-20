import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';

import { HasCanDeactivate } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<HasCanDeactivate> {
  canDeactivate(component: HasCanDeactivate): Observable<boolean> | boolean {
    return component.canDeactivate ? component.canDeactivate(): true;
  }
}

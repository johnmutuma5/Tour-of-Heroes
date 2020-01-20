import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, EMPTY, of } from 'rxjs';
import { map, mergeMap, take } from 'rxjs/operators';

import { Crisis } from './crisis';
import { CrisisService } from './crisis.service';


@Injectable({
  providedIn: 'root'
})
export class CrisisDetailResolverService implements Resolve<Crisis> {

  constructor(
    private cs: CrisisService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Crisis> | Observable<never> {
    console.log('take your observable sir');
    return this.cs.getCrisis(route.paramMap.get('id')).pipe(
      take(1),
      mergeMap(crisis => {
        console.log(crisis);
        if(crisis) return of(crisis)

        this.router.navigate(['/crisis-center']);
        return EMPTY;
      })
    );
  }
}

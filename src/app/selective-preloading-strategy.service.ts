import { Injectable } from '@angular/core';
import { Route, PreloadingStrategy } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectivePreloadingStrategyService implements PreloadingStrategy {
  preloadedModules: string[] = [];

  constructor() { }

  preload(routeConfig: Route, load: () => Observable<any>): Observable<any> {
    if(routeConfig.data && routeConfig.data.preload) {
      this.preloadedModules.push(routeConfig.path);
      return load();
    }

    console.log('Can\'t preload: ', routeConfig.path);
    return of(null);
  }
}

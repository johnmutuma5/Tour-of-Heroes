import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from  '@angular/router';
import { SelectivePreloadingStrategyService } from '../../selective-preloading-strategy.service';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  sessionId$: Observable<string>;
  token$: Observable<string>;
  preloadedModules: string[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private preloadingStrategyService: SelectivePreloadingStrategyService
  ) {
    this.preloadedModules = this.preloadingStrategyService.preloadedModules;
  }

  ngOnInit() {
    this.sessionId$ = this.activatedRoute.queryParamMap.pipe(
      tap(params => console.log(params)),
      map((params: Params) => {
        const sessionId = params.get('session_id');
        return sessionId || 'None'
      })
    );

    this.token$ = this.activatedRoute.fragment.pipe(
      map((fragment: string) => fragment || 'None')
    );
  }
}

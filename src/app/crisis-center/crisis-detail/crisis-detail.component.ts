import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {  Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss']
})
export class CrisisDetailComponent implements OnInit {
  crisis$: Observable<Crisis>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: CrisisService,
  ) { }

  ngOnInit() {
    this.crisis$ = this.activatedRoute.paramMap.pipe(
      switchMap(params => {
        return this.service.getCrisis(params.get('id'));
      })
    );
    /**
     *
     * Since the application never reuses crisis-detail component, we always navigate back to crisises list
     * in order to select another crisis and therefore an new instance of the crisis-detail is always created
     * and the previous one destroyed.
     *
     * The paramMap observable approach is therefore not very instrumental for this particular case.
     * We can simply make use of the non-observable strategy for the paramMap:
     *
     * let id = this.activatedRoute.snapshot.paramMap.get('id');
     * this.crisis$ = this.service.getCrisis(id);
     *
     * It doesn't harm though to leave it with the observable approach. 😀
     *
     */
  }

  goToCrises(crisis: Crisis) {
    this.router.navigate(['/crisis-center', { crisisId: crisis.id }]);
  }
}

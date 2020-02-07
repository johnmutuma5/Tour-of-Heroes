import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, /*ParamMap*/ } from '@angular/router';
import {  Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero$: Observable<Hero>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: HeroService,
  ) { }

  ngOnInit() {
    this.hero$ = this.activatedRoute.paramMap.pipe(
      switchMap(params => {
        return this.service.getHero(params.get('id'));
      })
    );
    /**
     *
     * Since the application never reuses hero-detail component, we always navigate back to heroes list
     * in order to select another hero and therefore an new instance of the hero-detail is always created
     * and the previous one destroyed.
     *
     * The paramMap observable approach is therefore not very instrumental for this particular case.
     * We can simply make use of the non-observable strategy for the paramMap:
     *
     * let id = this.activatedRoute.snapshot.paramMap.get('id');
     * this.hero$ = this.service.getHero(id);
     *
     * It doesn't harm though to leave it with the observable approach. 😀
     *
     */
  }

  goToHeros(hero: Hero) {
    this.router.navigate(['/heroes', { heroId: hero.id }]);
  }
}

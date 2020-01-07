import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  heroes: Hero[];
  previousHeroId: number;

  constructor(private heroService: HeroService,
              private currentRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getHeroes();
    this.previousHeroId = +this.currentRoute.snapshot.paramMap.get('heroId');
    console.log(this.previousHeroId);
  }

  isPrevioslyViewedHero(hero: Hero) {
    return this.previousHeroId === hero.id;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}

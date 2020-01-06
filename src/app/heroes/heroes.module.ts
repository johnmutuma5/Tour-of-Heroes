import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HerosRoutingModule } from './heroes-routing.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [ HeroListComponent, HeroDetailComponent ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HerosRoutingModule,
 ]
})
export class HeroesModule { }

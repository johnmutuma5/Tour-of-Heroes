import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './hero-list/hero-list.component';

const appRoutes = [{
  path: 'heros', component: HeroListComponent
}, {
  path: 'crisis', component: CrisisListComponent,
}, {
  path: '', redirectTo: '/heros', pathMatch: 'full',
}];

const ConfiguredModule: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [ConfiguredModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

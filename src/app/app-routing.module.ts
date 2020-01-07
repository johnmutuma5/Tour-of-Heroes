import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full', },
  { path: '**', component: PageNotFoundComponent, }
];

const ConfiguredModule: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [ConfiguredModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

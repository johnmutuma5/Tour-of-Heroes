import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';

import { AuthGuard } from './auth/auth.guard';

const appRoutes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'crisis-center',
    loadChildren: () => import('./crisis-center/crisis-center.module').then(mod => mod.CrisisCenterModule),
  },
  { path: '', redirectTo: '/heroes', pathMatch: 'full', },
  { path: 'compose', component: ComposeMessageComponent, outlet: 'popup' },
  { path: '**', component: PageNotFoundComponent, }
];

const ConfiguredModule: ModuleWithProviders<RouterModule> = RouterModule.forRoot(
  appRoutes,
  {
    preloadingStrategy: PreloadAllModules,
  }
);

@NgModule({
  imports: [ConfiguredModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './auth/auth.guard';
import {ComposeMessageComponent} from './compose-message/compose-message.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {SelectivePreloadingStrategyService} from './selective-preloading-strategy.service';



const appRoutes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule),
    canLoad: [ AuthGuard ],
  },
  {
    path: 'crisis-center',
    loadChildren: () => import('./crisis-center/crisis-center.module').then(mod => mod.CrisisCenterModule),
    data: { preload: true },
  },
  { path: '', redirectTo: '/heroes', pathMatch: 'full', },
  { path: 'compose', component: ComposeMessageComponent, outlet: 'popup' },
  { path: '**', component: PageNotFoundComponent }
];

const ConfiguredModule: ModuleWithProviders<RouterModule> = RouterModule.forRoot(
  appRoutes,
  {
    preloadingStrategy: SelectivePreloadingStrategyService,
  }
);

@NgModule({
  imports: [ConfiguredModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

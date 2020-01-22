import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisDetailResolverService } from './crisis-detail-resolver.service';
import { CanDeactivateGuard } from '../shared/guards/can-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: CrisisCenterComponent,
    children: [
      { path: '', component: CrisisListComponent },
      {
        path: ':id',
        component: CrisisDetailComponent,
        canDeactivate: [ CanDeactivateGuard ],
        resolve: {
          crisis: CrisisDetailResolverService,
        }
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrisisCenterRoutingModule { }

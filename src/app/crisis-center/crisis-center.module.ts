import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CrisisCenterRoutingModule
  ],
  declarations: [
    CrisisCenterComponent,
    CrisisCenterHomeComponent,
    CrisisListComponent,
    CrisisDetailComponent,
  ],
})
export class CrisisCenterModule { }

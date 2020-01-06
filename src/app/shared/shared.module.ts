import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppAsyncPipe } from './pipes/app-async.pipe';

@NgModule({
  declarations: [
    AppAsyncPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AppAsyncPipe,
  ]
})
export class SharedModule { }

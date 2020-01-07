import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppAsyncPipe } from './pipes/app-async.pipe';

@NgModule({
  declarations: [
    AppAsyncPipe,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  exports: [
    AppAsyncPipe,
    BrowserAnimationsModule,
    FormsModule,
  ]
})
export class SharedModule { }

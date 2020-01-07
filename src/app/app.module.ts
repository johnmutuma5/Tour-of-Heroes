import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroesModule } from './heroes/heroes.module';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    CrisisCenterModule,
    AppRoutingModule, // this contains the wildcard route, so it need to be last here for angular to match routes in feature routing modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

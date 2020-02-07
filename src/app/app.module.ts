import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, /*ModuleWithProviders*/ } from '@angular/core';
import { /*RouterModule,*/ Router } from '@angular/router';
import { /*DialogService*/ } from './dialog.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroesModule } from './heroes/heroes.module';
import { SharedModule } from './shared/shared.module';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ComposeMessageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HeroesModule,
    AuthModule,
    AppRoutingModule, // this contains the wildcard route, so it need to be last here for angular to match routes in feature routing modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private router: Router) {
    const routerConfigAsJson = JSON.stringify(
      this.router.config,
      (key, value) => {
        if (typeof value === 'function') {
          return value.name;
        }
        return value;
      },
      2
    );
    console.log(routerConfigAsJson);
  }
}

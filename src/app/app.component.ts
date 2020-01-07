import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation],
})
export class AppComponent {
  title = 'tour-of-heroes';

  getAnimationData(outlet: RouterOutlet) {
    const data = outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
    console.log(outlet);
    // console.log(data);
    return data;
  }
}

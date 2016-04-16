import {Component} from 'angular2/core';
import {HeroesComponent} from '../../heroes/components/heroes.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {DashBoadComponent} from './dashboad.component';
import {HeroDetailComponent} from '../../hero-detail/components/hero-detail.component';

@RouteConfig([
      {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent},
      {
        path: '/dashboad',
        name: 'Dashboad',
        component: DashBoadComponent,
        useAsDefault: true
      },
      {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
      }
])

@Component({
  selector: "my-app",
  styleUrls: ['src/app/components/app.component.css'],
  templateUrl: 'src/app/components/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})

export class AppComponent{
  title = "Tour of hero";
}

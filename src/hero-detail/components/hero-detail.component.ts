import {Component, Input, OnInit} from 'angular2/core';
import {Hero} from '../../model/hero';
import {HeroService} from '../../service/hero.service';
import {RouteParams} from 'angular2/router'

@Component({
    selector: 'my-hero-details',
    providers: [HeroService],
    templateUrl: 'src/hero-detail/components/hero-detail.component.html',
    styleUrls: ['src/hero-detail/components/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit{

  constructor(private _heroService: HeroService,private _routerParam: RouteParams){}

  ngOnInit(){
    let id = +this._routerParam.get('id');
    this._heroService.getHero(id).then(hero => this.hero = hero);
  }

  @Input()
  hero: Hero;

  goback(){
    window.history.back();
  }
}

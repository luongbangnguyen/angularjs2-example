import {Component, OnInit} from 'angular2/core';
import {HeroService} from '../../service/hero.service';
import {Hero} from '../../model/hero';
import { Router } from 'angular2/router';


@Component({
  selector: 'my-dashboad',
  providers:[HeroService],
  templateUrl: 'src/app/components/dashboad.component.html',
  styleUrls:['src/app/components/dashboad.component.css']
})

export class DashBoadComponent implements OnInit{
  constructor(private _herosevice: HeroService,private _router: Router){}

  ngOnInit(){
    this.getHeroes();
  }

  heroes: Hero[] = [];

  gotoDetail(hero: Hero){
     this._router.navigate(['HeroDetail', { id: hero.id }]);
  }
  getHeroes(){
    this._herosevice.getHeroes().then(heroes => this.heroes = heroes.slice(1,5));
  }
}

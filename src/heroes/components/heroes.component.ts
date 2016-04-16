import {Component,OnInit} from 'angular2/core';
import {Hero} from '../../model/hero';
import {HeroDetailComponent} from "../../hero-detail/components/hero-detail.component";
import {HeroService} from '../../service/hero.service';
import {Router} from 'angular2/router';

@Component({
  selector: 'my-heroes',
  styleUrls: ['src/heroes/components/heroes.component.css'],
  templateUrl:'src/heroes/components/heroes.component.html',
  directives: [HeroDetailComponent],
  providers: [HeroService],
})


export class HeroesComponent implements OnInit{

  constructor(private _heloService: HeroService, private _router: Router){}

  ngOnInit(){
    this.getHeroes();
  }
  hero: Hero = {
    id: 1,
    name: 'windstorm'
  };
  heroes: Hero[];
  selectedHero: Hero;

  getHeroes(){
    this._heloService.getHeroes().then(heroes => this.heroes = heroes);
  }
  onSelect(hero: Hero){
    this.selectedHero = hero;
  }
  gotoDetail(){
    this._router.navigate(['HeroDetail',{id: this.selectedHero.id}]);
  }

}

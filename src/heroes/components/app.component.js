System.register(['angular2/core', "./hero-detail.component", '../../service/hero.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_detail_component_1, hero_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            let AppComponent = class AppComponent {
                constructor(_heloService) {
                    this._heloService = _heloService;
                    this.title = "Tour of hero";
                    this.hero = {
                        id: 1,
                        name: 'windstorm'
                    };
                }
                ngOnInit() {
                    this.getHeroes();
                }
                getHeroes() {
                    this._heloService.getHeroes().then(heroes => this.heroes = heroes);
                }
                onSelect(hero) {
                    this.selectedHero = hero;
                }
            };
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    styles: [`
      .selected {
        background-color: #CFD8DC !important;
        color: white;
      }
      .heroes {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
      }
      .heroes li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0;
        height: 1.6em;
        border-radius: 4px;
      }
      .heroes li.selected:hover {
        background-color: #BBD8DC !important;
        color: white;
      }
      .heroes li:hover {
        color: #607D8B;
        background-color: #DDD;
        left: .1em;
      }
      .heroes .text {
        position: relative;
        top: -3px;
      }
      .heroes .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0 0 4px;
      }
    `],
                    template: `
      <h1>{{title}}</h1>
      <my-hero-details [hero]="selectedHero"></my-hero-details>
      <h2>My heroes</h2>
      <ul class="heroes">
        <li *ngFor="#hero of heroes"
        (click)="onSelect(hero)"
        [class.selected]="hero === selectedHero">
          <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
      </ul>
    `,
                    directives: [hero_detail_component_1.HeroDetailComponent],
                    providers: [hero_service_1.HeroService],
                }), 
                __metadata('design:paramtypes', [hero_service_1.HeroService])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
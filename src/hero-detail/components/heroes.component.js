System.register(['angular2/core', "./hero-detail.component", '../../service/hero.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, hero_detail_component_1, hero_service_1, router_1;
    var HeroesComponent;
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
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            let HeroesComponent = class HeroesComponent {
                constructor(_heloService, _router) {
                    this._heloService = _heloService;
                    this._router = _router;
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
                gotoDetail() {
                    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
                }
            };
            HeroesComponent = __decorate([
                core_1.Component({
                    selector: 'my-heroes',
                    styleUrls: ['src/heroes/components/heroes.component.css'],
                    templateUrl: 'src/heroes/components/heroes.component.html',
                    directives: [hero_detail_component_1.HeroDetailComponent],
                    providers: [hero_service_1.HeroService],
                }), 
                __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router])
            ], HeroesComponent);
            exports_1("HeroesComponent", HeroesComponent);
        }
    }
});
//# sourceMappingURL=heroes.component.js.map
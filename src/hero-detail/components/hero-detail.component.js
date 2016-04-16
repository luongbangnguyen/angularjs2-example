System.register(['angular2/core', '../../model/hero', '../../service/hero.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, hero_1, hero_service_1, router_1;
    var HeroDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_1_1) {
                hero_1 = hero_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            let HeroDetailComponent = class HeroDetailComponent {
                constructor(_heroService, _routerParam) {
                    this._heroService = _heroService;
                    this._routerParam = _routerParam;
                }
                ngOnInit() {
                    let id = +this._routerParam.get('id');
                    this._heroService.getHero(id).then(hero => this.hero = hero);
                }
                goback() {
                    window.history.back();
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', hero_1.Hero)
            ], HeroDetailComponent.prototype, "hero", void 0);
            HeroDetailComponent = __decorate([
                core_1.Component({
                    selector: 'my-hero-details',
                    providers: [hero_service_1.HeroService],
                    templateUrl: 'src/hero-detail/components/hero-detail.component.html',
                    styleUrls: ['src/hero-detail/components/hero-detail.component.css']
                }), 
                __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.RouteParams])
            ], HeroDetailComponent);
            exports_1("HeroDetailComponent", HeroDetailComponent);
        }
    }
});
//# sourceMappingURL=hero-detail.component.js.map
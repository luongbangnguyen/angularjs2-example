System.register(['angular2/core', '../../service/hero.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, hero_service_1, router_1;
    var DashBoadComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            let DashBoadComponent = class DashBoadComponent {
                constructor(_herosevice, _router) {
                    this._herosevice = _herosevice;
                    this._router = _router;
                    this.heroes = [];
                }
                ngOnInit() {
                    this.getHeroes();
                }
                gotoDetail(hero) {
                    this._router.navigate(['HeroDetail', { id: hero.id }]);
                }
                getHeroes() {
                    this._herosevice.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
                }
            };
            DashBoadComponent = __decorate([
                core_1.Component({
                    selector: 'my-dashboad',
                    providers: [hero_service_1.HeroService],
                    templateUrl: 'src/app/components/dashboad.component.html',
                    styleUrls: ['src/app/components/dashboad.component.css']
                }), 
                __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router])
            ], DashBoadComponent);
            exports_1("DashBoadComponent", DashBoadComponent);
        }
    }
});
//# sourceMappingURL=dashboad.component.js.map
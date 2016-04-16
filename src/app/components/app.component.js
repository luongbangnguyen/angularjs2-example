System.register(['angular2/core', '../../heroes/components/heroes.component', 'angular2/router', './dashboad.component', '../../hero-detail/components/hero-detail.component'], function(exports_1, context_1) {
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
    var core_1, heroes_component_1, router_1, dashboad_component_1, hero_detail_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (heroes_component_1_1) {
                heroes_component_1 = heroes_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dashboad_component_1_1) {
                dashboad_component_1 = dashboad_component_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            }],
        execute: function() {
            let AppComponent = class AppComponent {
                constructor() {
                    this.title = "Tour of hero";
                }
            };
            AppComponent = __decorate([
                router_1.RouteConfig([
                    {
                        path: '/heroes',
                        name: 'Heroes',
                        component: heroes_component_1.HeroesComponent },
                    {
                        path: '/dashboad',
                        name: 'Dashboad',
                        component: dashboad_component_1.DashBoadComponent,
                        useAsDefault: true
                    },
                    {
                        path: '/detail/:id',
                        name: 'HeroDetail',
                        component: hero_detail_component_1.HeroDetailComponent
                    }
                ]),
                core_1.Component({
                    selector: "my-app",
                    styleUrls: ['src/app/components/app.component.css'],
                    templateUrl: 'src/app/components/app.component.html',
                    directives: [router_1.ROUTER_DIRECTIVES],
                    providers: [router_1.ROUTER_PROVIDERS]
                }), 
                __metadata('design:paramtypes', [])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
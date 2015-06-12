/// <reference path="../_all.ts" />

((): void => {
    "use strict";

    angular.module("app.foobars")
        .config(config);

    config.$inject = ["$routeProvider", "$locationProvider"];

    function config(
        $routeProvider: ng.route.IRouteProvider,
        $locationProvider:ng.ILocationProvider): void {

        $routeProvider.when('/foobars', {
            templateUrl: 'views/foobars/foobars.html',
            controller: 'app.foobars.FoobarController',
            controllerAs: "vm",
            resolve: {
                foobars: resolveFoobars
            }
        });
    }

    resolveFoobars.$inject = ["app.services.FoobarService"];
    function resolveFoobars(foobarService: app.services.IFoobarService):
        ng.IPromise<app.services.IFoobar[]> {
        return foobarService.getAll();
    }
})();
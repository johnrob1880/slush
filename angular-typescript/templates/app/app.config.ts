/// <reference path="_all.ts" />

((): void => {
    "use strict";

    angular.module("app")
        .config(config);

    config.$inject = ["$routeProvider", "$locationProvider"];
    function config(
        $routeProvider: ng.route.IRouteProvider,
        $locationProvider:ng.ILocationProvider): void {
            $locationProvider.html5Mode(true);

            $routeProvider.when("/", {
                template: "<div>App Home</div>"
            });
    }
})();
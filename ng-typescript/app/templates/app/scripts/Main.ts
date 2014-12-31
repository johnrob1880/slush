/// <reference path="_all.ts" />

module Main {
    export class App {
        public static Filters: ng.IModule = angular.module("app.filters", []);
        public static Directives: ng.IModule = angular.module("app.directives", []);
        public static Services: ng.IModule = angular.module("app.services", []);
        public static Controllers: ng.IModule = angular.module("app.controllers", ["app.services"]);
        public static Module: ng.IModule = angular.module("app",
            ["app.filters", "app.directives", "app.services", "app.controllers"]);
    }
}

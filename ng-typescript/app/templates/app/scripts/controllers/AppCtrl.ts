/// <reference path="../_all.ts" />

module Main.Controllers {

    export interface IAppCtrlScope extends ng.IScope {
        vm: AppCtrl
    }

    export interface IAppCtrl {
        message:string;
    }

    export class AppCtrl implements IAppCtrl {
        static $inject = ['$scope'];
        message:string;

        constructor($scope: IAppCtrlScope) {
            $scope.vm = this;
            this.message = "Hello World!";
        }
    }

    Main.App.Controllers.controller('appCtrl', ["$scope", ($scope) => new AppCtrl($scope)]);
}


/// <reference path="../../typings/tsd.d.ts />
/// <reference path="../NgAuth.ts" />

module NgAuth.Controllers {
    export interface INgAuthLoginCtrlScope extends ng.IScope {
        vm: NgAuthLoginCtrl;
    }

    export interface INgAuthLoginCtrl {

    }

    export class NgAuthLoginCtrl implements INgAuthLoginCtrl {
        constructor(private $scope:INgAuthLoginCtrlScope, private $rootScope:ng.IRootScopeService) {
            $scope.vm = this;
        }
    }

    NgAuth.App.Controllers.controller("ngAuthLoginCtrl", ["$scope", "$rootScope", ($scope, $rootScope) => new NgAuthLoginCtrl($scope, $rootScope)]);
}
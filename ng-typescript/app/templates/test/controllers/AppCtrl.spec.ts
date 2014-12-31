/// <reference path="./../../typings/tsd.d.ts" />

module Tests {
    describe("AppCtrl", () => {

        var controller, scope;

        beforeEach(angular.mock.module("app"));

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('appCtrl', {$scope: scope});
        }));

        // tests
        it('scope.vm should be the controller', function () {
            expect(scope.vm).toBe(controller);
        });

        it('should have message set to "Hello World!"', function () {
            expect(scope.vm.message).toBe("Hello World!");
        });
    });
}
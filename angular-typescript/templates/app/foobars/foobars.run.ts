/// <reference path="../_all.ts" />

((): void => {
    "use strict";

    angular.module("app.foobars")
        .run(run);

    run.$inject = [
        "$httpBackend",
        "app.blocks.ApiEndpoint"
    ];
    function run($httpBackend:ng.IHttpBackendService,
                 apiEndpoint:app.blocks.IApiEndpointConfig):void {
        var foobars = [
            {name: 'Foobar1'},
            {name: 'Foobar2'},
            {name: 'Foobar3'},
        ];
        $httpBackend.whenGET(apiEndpoint.baseUrl + "/foobars").respond(foobars);

        $httpBackend.whenGET(/views\/.*/).passThrough();

    }
})();
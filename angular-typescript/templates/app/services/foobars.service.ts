/// <reference path="../_all.ts" />

module app.services {
    "use strict";

    export interface IFoobarService {
        getAll(): ng.IPromise<IFoobar[]>;
    }

    export interface IFoobar {
        name: string;
    }

    class FoobarService implements IFoobarService {
        constructor(private $http: ng.IHttpService,
            private apiEndpoint: app.blocks.IApiEndpointConfig) {
        }

        getAll(): ng.IPromise<IFoobar[]> {
            return this.$http.get(
                this.apiEndpoint.baseUrl + "/foobars")
                .then((response: ng.IHttpPromiseCallbackArg<IFoobar[]>): IFoobar[] => {
                    return <IFoobar[]>response.data;
                });
        }
    }

    factory.$inject = ["$http", "app.blocks.ApiEndpoint"];

    function factory($http:ng.IHttpService,
        apiEndpoint:app.blocks.IApiEndpointConfig): IFoobarService {
        return new FoobarService($http, apiEndpoint);
    }

    angular.module("app.services")
        .factory("app.services.FoobarService", factory);

}
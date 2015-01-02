/// <reference path="../_all.ts" />

module app.foobars {
    "use strict";

    interface IFoobarScope {
        foobars: IFoobar[];
    }

    interface IFoobar {
        name: string;
    }

    class FoobarController implements IFoobarScope {
        foobars: IFoobar[];

        static $inject = ["foobars"];
        constructor(foobars: IFoobar[]) {
            console.log(foobars);
            this.foobars = foobars;
        }
    }

    angular
        .module("app.foobars")
        .controller("app.foobars.FoobarController", FoobarController);
}
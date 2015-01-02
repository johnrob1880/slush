/// <reference path="_all.ts" />

((): void => {
    "use strict";

    angular.module("app", [
        "app.core",
        "app.services",
        "app.widgets",
        "app.blocks",
        /*
        * Features
         */
        "app.foobars"
    ]);
})();

/* global angular */
Run.$inject = ['$rootScope'];

function Run($rootScope) {
    console.log("running.")
}

angular.module("test", []).run(Run);
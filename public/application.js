'use strict';

function httpProvider($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}

function routeProvider($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partial/index',
            controller: 'IndexCtrl',
            label: '主页'
        })
        .otherwise({
            redirectTo: '/'
        });
}

angular.module('ideasPlus', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
    ])
    .config(['$httpProvider', httpProvider])
    .config(['$routeProvider', routeProvider]);
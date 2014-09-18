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
        .when('/recruiting', {
            templateUrl: 'partial/recruiting',
            controller: 'RecruitCtrl',
            label: '招募'
        })
        .when('/projects', {
            templateUrl: 'partial/projects',
            controller: 'ProjectCtrl',
            label: '项目'
        })
        .when('/projects/:id', {
            templateUrl: 'partial/project',
            label: '项目详情'
        })
        .when('/persons', {
            templateUrl: 'partial/person',
            controller: "PersonCtrl",
            label: '人物'
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
angular.module('fifaApp',['ngRoute'])
.config(function($routeProvider){
    $routeProvider.when('/login',{
        templateUrl:'views/login_my.html'
    })
    .when('/',{
        templateUrl:'views/team_list_my.html',
        controller:'TeamListCtrl as teamListCtrl'
    })
    .when('/team/:code',{
        templateUrl:'views/team_details_my.html',
        controller:'TeamDetailsCtrl as teamDetailsCtrl'
    })
    .otherwise({
        redirectTo:'/'
    });
});

angular.module('fifaApp',['ngRoute'])
.config(function($routeProvider){
    $routeProvider.when('/login',{
        templateUrl:'views/login_my.html'
    })
    .when('/',{
        templateUrl:'views/team_list_my.html',
        controller:'TeamListCtrl as teamListCtrl'
    })
    .otherwise({
        redirectTo:'/'
    });
});

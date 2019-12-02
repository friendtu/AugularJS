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
        controller:'TeamDetailsCtrl as teamDetailsCtrl',
        resolve:{
            auth:['$q','$location','UserService',function($q,$location,UserService){
                return UserService.session().then(
                    function(success){},
                    function(err){
                        $location.path('#/login');
                        $location.replace();
                        return $q.reject(err);
                    });
            }]
        }
    })
    .otherwise({
        redirectTo:'/'
    });
});

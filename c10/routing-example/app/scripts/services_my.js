
angular.module('fifaApp')
    .factory('FifaService',['$http',function($http){
        return {
            getTeams: function(){
                return $http.get('/api/team');
            },
            getTeamDetail:function(code){
                return $http.get('/api/team/'+code);
            }
        };
    }])

    .factory('UserService',["$http",function($http){
        return {
            isLoggedIn:false,
            session: function(){
                return $http.get('/api/session').then(function(response){
                    this.isLoggedIn=true;
                    return response;
                },function(error){
                    this.isLoggedIn=false;

                });
            },
            login:function(user){
                return $http.post('/api/login',user)
                    .then(function(response){
                        this.isLoggedIn=true;
                        return response;
                    });
            }
        };
        //return service;
    }]);
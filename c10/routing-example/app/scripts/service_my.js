
Angular.module('fifaApp')
.factory('FifaService',['$http',function($http){
    return {
        getTeams: function(){
            return $http.get('/api/team');
        },
        getTeamDetail:function(code){
            return $http.get('api/team/'+code);
        }
    };
}])
.factory('UserService',["$http",function($http){
    return {
        self:this,
        isLoggedIn:false,
        session: function(){
            return $http.get('/api/session').then(function(response){
                self.isLoggedIn=true;
                return response;
            });
        },
        login:function(user){
            return $http.post('/api/login',user)
                .then(function(response){
                    self.isLoggin=true;
                    return response;
                });
            },
        }
    }]
);
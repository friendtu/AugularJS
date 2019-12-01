angular.module('fifaApp')
.controller('MainCtrl',['UserService',function(UserService){
    var self=this;
    self.userService=UserService;
    UserService.session();
}])
.controller('TeamListCtrl',['FifaService',function(FifaService){
    var self=this;
    self.teams=[];

    FifaService.getTeams().then(function(response){
        self.teams=response.data;
    });

}])
.controller('TeamDetailsCtrl',['$location','$routeParams','FifaService',function($location,$routeParams,FifaService){
    var self=this;
    self.team={};
    FifaService.getTeamDetails($routeParams.code)
        .then(function(resp){
            self.team=resp.data;
        },function(error){
            $location.path('/login');
        });
}])
.controller('LoginCtrl',['UserService','$location','$log',function(UserService,$location,$log){
    self=this;
    self.user={username:'',password:''};
    self.$log=$log;
    //self.errorMessage="initial wrong";
    self.login=function(){
        //self.$log.log("user:",self.user);
        UserService.login(self.user).then(function(success){
            $location.path('/team');
        },function(error){
            self.errorMessage=error.data.msg;
        });
    }
}]);
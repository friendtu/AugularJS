angular.module('fifaApp',['ngRoute'])
.controller('MainCtrl',['UserService',function(UserService){
    var self=this;
    self.userService=UserService;
    UserService.session();
}])
.controller('LoginCtrl',['UserService','$location',function(UserService,$location){
    self.user={username:'',password:''};
    self.login=function(){
        UserService.login(self.user).then(function(success){
            $location.path('/team');
        },function(error){
            self.errorMessage=error.data.msg;
        });
    }
}]);
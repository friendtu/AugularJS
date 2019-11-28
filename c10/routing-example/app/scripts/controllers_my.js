angular.module('fifaApp',['ngRoute'])
.controller('MainCtrl',['UserService',function(userService){
    var self=this;
    self.userService=UserService;
    UserService.session();
}]);
angular.module("notesApp",[])
    .controller('MainCtrl',['$log',function($log){
        var self=this;
        self.tab="first";
        self.open=function(tab){
            self.tab=tab;
            $log.log("Button is clicked.")
        };
    }])
    .controller('SubCtrl',[function(){
        var self=this;
        self.list=[
            {id:1,label:'Item 0'},
            {id:2,label:'Item 1'}
        ];

        self.add=function(){
            self.list.push({
                id:self.list.length+1,
                label:'Item '+self.list.length
            });
        };
    }]);
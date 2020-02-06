angular.module('sliderApp',[])
    .controller('MainCtrl',[function(){
        var self=this;
        self.selectedValue=2000;
        self.textValue=4000;

        self.setSelectedValue=function() {
            console.log(self.textValue);
            console.log(self.selectedValue);
            self.selectedValue=self.textValue;
        };
    }
]);
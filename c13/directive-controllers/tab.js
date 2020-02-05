angular.module('stockMarketApp')
    .directive('tab',[function(){
        return {
            restrict: "E",
            transclude: true,
            template: '<div ng-show="selected" ng-transclude></div>',
            scope:true,
            require:'^tabs',
            link: function($scope,$element,$attr,tabCtrl) {
                tabCtrl.registerTab($attr.title,$scope);
            }
        };
    }]);
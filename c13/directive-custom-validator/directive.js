angular.module("stockMarketApp")
    .directive('validZip',[function(){
        var zipCodeRegex=/^\d{5}(?:[-\s]\d{4})?$/g;
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function($scope,$element,$attrs,ngModelCtrl) {
                ngModelCtrl.$parsers.push(function(value) {
                    var valid=zipCodeRegex.test(value);
                    ngModelCtrl.$setValidity('validZip',valid);
                    return valid?value:undefined;
                });

                ngModelCtrl.$formatters.push(function(value){
                    ngModelCtrl.$setValidity('validZip',zipCodeRegex.test(value));
                    return value;
                });
            }
        };
    }]);
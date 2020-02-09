angular.module('dynamicFormApp')
    .directive('formElement',[function(){
        return {
            restrict:'E',
            require: '^form',
            scope:true,
            compile: function($element,$attrs){
                var expectedInputAtrrs= {
                    'required':'required',
                    'ng-minlength':'ngMinlength',
                    'ng-pattern':'ngPattern'
                };
            
                var validationKeys=$element.find('validation');
                var presentValidationKeys={};
                var inputName=$attrs.name;
                angular.forEach(validationKeys,function(validationKey){
                    validationKey=angular.element(validationKey);
                    presentValidationKeys[validationKey.attr('key')]=validationKey.text();
                });

                var elementHtml='<div>' +
                    '<lable>' + $attrs.label + '</lable>';
                elementHtml+= '<input type="' + $attrs.type + '"' + 
                    'name="' +$attrs.name + '"' +
                    'ng-model="' + $attrs.bindTo +'"';

                $element.removeAttr('type');
                $element.removeAttr('name');
                $element.removeAttr('bindTo');

                for(var i in expectedInputAttrs) {
                    if($attr[expectedInputAttrs[i]]!==undefined) {
                        elementHmtl+=' '+i+ '="' +
                            $attrs[expectedInputAttrs[i]] +'"';
                    }
                    $element.removeAttr(i);
                }

                elementHtml+='>';
            }
        };
    }]);
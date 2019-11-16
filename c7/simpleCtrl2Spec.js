describe("SimpelCtrl1",function(){
    beforeEach(function(){
        module('simpleCtrl2App');
    });

    var ctrl;
    var $locaton;
    var $window;
    beforeEach(inject(function($controller,_$location_){

        $location=_$location_;
        ctrl=$controller('SimpleCtrl2');
    }));
    
    it('should navigate away',function(){
        expect($location.path()).toEqual('');
        $location.path('/here');
        ctrl.navigate1();
        expect($location.path()).toEqual('/some/where');
    });

    it('Should navigate away from the current page',function(){
        expect($location.path()).toEqual('');
        $location.path('/there');
        ctrl.navigate2();
        expect($location.path()).toEqual('/some/where/else');
        
    });
});
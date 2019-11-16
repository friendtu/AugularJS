describe("SimpelCtrl1",function(){
    beforeEach(function(){
        module('notesApp');
    });

    var ctrl;
    var $locaton;
    beforeEach(inject(function($controller,_$location_){
        ctrl=$controller('SimpleCtrl');
        $location=_$location_;
    }));
    
    it('should navigate away',function(){
        $location.path('/here');
        ctrl.navigate();
        expect($location.path()).toEqual('/some/where/else');
    });
});
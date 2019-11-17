describe('ItemCtrl with inline mock',function(){
    beforeEach(module('notesApp1'));
    var ctrl,mockService;
    
    //cannot do inject first.
    //beforeEach(inject(function($controller){
    //    ctrl=$controller('ItemCtrl');
    //}));

    it('should load mocked out items',function(){
        module({
            ItemService:{
                list:function() {
                    return [{id:1,label:'Mock'}];
                }
        }});
        inject(function($controller) {
            ctrl=$controller('ItemCtrl');
        });
        expect(ctrl.items).toEqual([{id:1,label:'Mock'}]);
    });
});
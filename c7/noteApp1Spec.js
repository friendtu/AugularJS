describe("notesApp1",function(){
    beforeEach(module('notesApp1'));

    var ctrl;
    var mockItemService;
    beforeEach(module(function($provide){
    //beforeEach(inject(function($provide){
        mockItemService={
            list:function(){
                return [{id:1,label: 'Mock'}];
            }
        };
        $provide.value('ItemService',mockItemService);
    }));

    beforeEach(inject(function($controller){
        ctrl=$controller('ItemCtrl');
    }));

    it('should load mocked out items',function(){
        expect(ctrl.items).toEqual([{id:1,label:'Mock'}]);
    });
});
describe('ItemService with spy',function(){
    beforeEach(module("notesApp1"));
    var ctrl;
    var itemService;
    beforeEach(inject(function($controller,ItemService){
        spyOn(ItemService,'list').and.returnValue([
            {id:1,label:'Mock'}
        ]);
        itemService=ItemService;
        ctrl=$controller('ItemCtrl');
    }));

    it('list should be called',function(){
        expect(itemService.list).toHaveBeenCalled();
        expect(itemService.list).toHaveBeenCalledTimes(1);
        expect(itemService.list.calls.count()).toEqual(1);
        expect(ctrl.items).toEqual([
            {id:1,label:'Mock'},
        ]);
    });
});
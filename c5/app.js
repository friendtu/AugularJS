function MainService(){
    var items=[
        {id:1,label:'Item 0'},
        {id:2,label:'Item 1'}
    ];
    this.list=function(){
            return items;
        };
    this.add=function(item) {
            items.push(item);
        };
}

angular.module("notesApp",[])
    .controller('MainCtrl',['$log','MainService',function($log,MainService){
        var self=this;
        self.tab="first";
        self.open=function(tab){
            self.tab=tab;
            $log.log(MainService.list())
        };
    }])
    .controller('SubCtrl',['ItemService',function(ItemService){
        var self=this;
        self.list=function(){
            return ItemService.list();
        };

        self.add=function(){
            ItemService.add({
                id:self.list().length+1,
                label:'Item '+self.list().length
            });
        };
    }])
    .service('MainService',[MainService])
    .factory('ItemService',[function(){
        var items=[
            {id:1,label:'Item 0'},
            {id:2,label:'Item 1'}
        ];
        return {
            list:function(){
                return items;
            },
            add:function(item) {
                items.push(item);
            }
        };
    }]);
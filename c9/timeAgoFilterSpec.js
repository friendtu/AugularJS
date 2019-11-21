describe("test timeAgoFilter", function(){
    beforeEach(module("filterApp"));

    var filter;
    beforeEach(inject(function(timeAgoFilter){
        filter=timeAgoFilter;
    }));

    it('Should respond based on timestamp',function(){
        var currentTime=new Date().getTime();
        currentTime-=1000;
        expect(filter(currentTime)).toEqual('seconds ago');
    });

});
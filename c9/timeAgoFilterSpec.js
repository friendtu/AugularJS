describe("test timeAgoFilter", function(){
    beforeEach(module("filterApp"));

    var filter;
    beforeEach(inject(function(timeAgoFilter){
        filter=timeAgoFilter;
    }));

    it('Should respond based on timestamp',function(){
        var currentTime=new Date().getTime();
        currentTime-=10000;
        expect(filter(currentTime)).toEqual('seconds ago');
        expect(filter(currentTime,true)).toEqual('minutes ago');

        var fewMinutesAgo=currentTime-1000*60;
        expect(filter(fewMinutesAgo)).toEqual('minutes ago');

        var fewHoursAgo=currentTime-1000*60*60*24;
        expect(filter(fewHoursAgo)).toEqual('days ago');

        var fewDaysAgo=currentTime-1000*60*60*24*31;
        expect(filter(fewDaysAgo)).toEqual('months ago');
    });
});
describe('Products category service',function() {
    beforeEach(angular.mock.module('products'));

    it('Should return the expected categories',function(){
        //angular.mock.module('products');
        angular.mock.module({
            'CategoryService':{
                getCategories:function() {
                    return {1:"Electrioncs"};
                }
            }
        });

        var service;

        angular.mock.inject(function (ProductsService){
            service=ProductsService;
        });
        var products=service.getProducts();
        expect(products[0].categoryName).toBe('Electrioncs');
    });
});
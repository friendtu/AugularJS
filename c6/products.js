angular.module('products',[]);
angular.module('products')
    .service('CategoryService',function CategoryService(){
        return {
            getCategories:function() {
                return {1:"Beverages",2:"Condiments"};
            }
        };
    })
    .service('ProductsService',function ProductService(CategoryService) {
        return {
            getProducts: function() {
                var product1={name:'Chai',categoryId:1};
                var product2={name: 'Aniseed Syrup',categoryId:2};
                var products=[product1,product2];

                var categories=CategoryService.getCategories();
                products.forEach(function(p){
                    p.categoryName=categories[p.categoryId];
                });
                return products;
            }
        };
    })
    .controller('ProductsController',function($scope,ProductsService){
        $scope.products=[];
        $scope.load=function(){
            $scope.products=ProductsService.getProducts();    
        };
    });





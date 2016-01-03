namespace app {
    angular.module("productManagement").config(routeConfig);
    
    routeConfig.$inject = ["$routeProvider"];
    function routeConfig($routeProvider: ng.route.IRouteProvider): void {
        $routeProvider.caseInsensitiveMatch = true;
        $routeProvider
        .when("/productlist", {
            templateUrl: "/app/products/productListView.html",
            controller: "ProductListCtrl as vm"
            })
        .when("/productdetail/:productId", {
            templateUrl: "/app/products/productDetailView.html",
            controller: "ProductDetailCtrl as vm"
        })
        .otherwise("/productlist");
    }
}


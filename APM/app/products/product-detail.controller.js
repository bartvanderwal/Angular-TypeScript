var app;
(function (app) {
    var productList;
    (function (productList) {
        var ProductDetailCtrl = (function () {
            function ProductDetailCtrl(dataAccessService) {
                this.dataAccessService = dataAccessService;
            }
            ProductDetailCtrl.$inject = ["dataAccessService"];
            return ProductDetailCtrl;
        })();
        ;
        angular
            .module("productManagement")
            .controller("ProductDetailCtrl", ProductDetailCtrl);
    })(productList = app.productList || (app.productList = {}));
})(app || (app = {}));
;

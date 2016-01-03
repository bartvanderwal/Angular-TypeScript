module app.productList {
    interface IProductDetailModel {
    }

    class ProductDetailCtrl implements IProductDetailModel {        
        static $inject = ["dataAccessService"];
        
        constructor(private dataAccessService: app.common.DataAccessService) {
        }
    };
    angular
        .module("productManagement")
        .controller("ProductDetailCtrl", ProductDetailCtrl);
};
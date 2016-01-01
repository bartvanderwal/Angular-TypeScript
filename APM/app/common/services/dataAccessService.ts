module app.common {
    export interface IDataAccessService {
        getProductResource() : ng.resource.IResourceClass<IProductResource>;
    }

    export interface IProductResource
        extends ng.resource.IResource<app.domain.IProduct> {
        
    }
    
    export class DataAccessService 
        implements IDataAccessService {
        
        static $inject = ["$resource", "$http"];
        constructor(
            private $resource: ng.resource.IResourceService,
            private $http: ng.htt) {
        }
        
        getProductResource() : ng.resource.IResourceClass<IProductResource> {
            // return this.$resource("api/products/:productId");
        }
    }
    
    angular
    .module('common.services')
    .service('dataAccessService', DataAccessService)
        
}
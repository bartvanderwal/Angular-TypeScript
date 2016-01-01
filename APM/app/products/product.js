var app;
(function (app) {
    var domain;
    (function (domain) {
        var Product = (function () {
            function Product(productId, productName, productCode, releaseDate, price, description, imageUrl) {
                this.productId = productId;
                this.productName = productName;
                this.productCode = productCode;
                this.releaseDate = releaseDate;
                this.price = price;
                this.description = description;
                this.imageUrl = imageUrl;
            }
            Product.prototype.calculateDiscount = function (percent) {
                if (percent < 0 || percent > 60) {
                    throw new Error("Percentage should be between 0 and 60 percent, but is " + percent);
                }
                return this.price * (1 - percent / 100);
            };
            return Product;
        })();
        domain.Product = Product;
    })(domain = app.domain || (app.domain = {}));
})(app || (app = {}));

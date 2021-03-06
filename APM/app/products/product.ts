module app.domain {
    export interface IProduct {
        productId: number;
        productName: string;
        productCode: string;
        releaseDate: Date;
        price: number;
        description: string;
        imageUrl: string;
        calculateDiscount(percent: number): number;   
    }

    export class Product implements IProduct {
        
        constructor(
        public productId: number,
        public productName: string,
        public productCode: string,
        public releaseDate: Date,
        public price: number,
        public description: string,
        public imageUrl: string) {
            
        }
        
        calculateDiscount(percent: number): number {
            if (percent<0 || percent>60) {
                throw new Error(`Percentage should be between 0 and 60 percent, but is ${percent}`);
            }
            return this.price * (1-percent/100);
        }

    }
}


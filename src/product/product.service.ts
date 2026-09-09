import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    private products =[
        { id:1, name:"Mobile", price:2000},
        { id:2, name:"Laptop", price:3000},
        { id:3, name:"Tablet", price:4000},
        { id:4, name:"Cpu",    price:5000},  
    ];

    getAllProducts(){
        return this.products;
    }
    getProductById(id:number){
        return this.products.find((product)=>product.id === id)
    }
}

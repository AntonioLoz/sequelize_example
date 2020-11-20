import { Router } from "express";
import { getProductIdMethod, productController } from "../controllers/product.controller";



class ProductsRoutes{
    public router:Router = Router();
     
    constructor(){
        this.router.get('/', productController); 
        this.router.get("/:id",getProductIdMethod );
        
    }
   

}

export const productsRoutes = new ProductsRoutes();
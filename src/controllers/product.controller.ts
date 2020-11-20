import {Request, Response  } from "express";
import { Product } from "../models/product";
import { Provider } from "../models/provider";




class ProductsController {
  
    public async index (req:Request, res:Response){
        try{
            const products = await Product.findAll({raw:true});
            
            if (products !==  null || products !==undefined){
                res.send(products);
            }else {
                res.sendStatus(404);
            }

        } catch (error){
            res.send(error);

        }
    }

    public async getproductById(req: Request, res: Response){
        try {
            const id = req.params.id;
            const product: Product | null = await Product.findOne({
                where: {
                    id: id
                },
                include: Provider
            });
       
            

            if(product !== null) {
                res.send(product);
            }else {
                res.sendStatus(404);
            }
        }catch(err) {
            console.log(err);
            res.send("An error has ocurred")
        }
    }

   
    
}

export const productController = new ProductsController().index;
export const getProductIdMethod = new ProductsController().getproductById;
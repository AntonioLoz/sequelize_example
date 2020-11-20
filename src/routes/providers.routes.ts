import { Router } from "express";
import { providerController } from "../controllers/provider.controllers";




class ProvidersRoutes{
    public router:Router = Router();
     
    constructor(){
        this.router.get('/', providerController); 
        
    }
   

}

export const providersRoutes = new ProvidersRoutes();
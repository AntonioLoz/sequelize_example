import {Request, Response  } from "express";
import { Provider } from "../models/provider";




class ProviderController {
  
    public async index (req:Request, res:Response){
        try{
            const providers = await Provider.findAll({raw:true});
            
            if (providers !==  null || providers !==undefined){
                res.send(providers);
            }else {
                res.sendStatus(404);
            }

        } catch (error){
            res.send(error);

        }
    }

   
    
}

export const providerController = new ProviderController().index;
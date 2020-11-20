import {Request, Response  } from "express";
import { User } from "../models/user";




class UserController {
  
    public async index (req:Request, res:Response){
        try{
            const users = await User.findAll({raw:true});
            
            if (users !==  null || users !==undefined){
                res.send(users);
            }else {
                res.sendStatus(404);
            }

        } catch (error){
            res.send(error);

        }
    }

    public async getUserById(req: Request, res: Response){
        try {
            const id = req.params.id;
            const user: User | null = await User.findByPk(id);
       
            

            if(user !== null) {
                res.send(user);
            }else {
                res.sendStatus(404);
            }
        }catch(err) {
            console.log(err);
            res.send("An error has ocurred")
        }
    }

   
    
}

export const userController = new UserController().index;
export const userControllerById = new UserController().getUserById;
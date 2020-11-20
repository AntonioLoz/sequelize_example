import { Router } from "express";
import { userController, userControllerById } from "../controllers/user.controller";



 class UsersRoutes{
    public router:Router = Router();
     
    constructor(){
        this.router.get('/', userController); 
        this.router.get('/:id', userControllerById)
        
    }
   

}

export const usersRoutes = new UsersRoutes();
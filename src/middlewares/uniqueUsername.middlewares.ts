import { NextFunction, Request, Response } from "express"
import { AppDataSource } from "../data-source"
import { Client } from "../entities"
import { AppError } from "../errors/App.errors"

export const usernameExists = async(req: Request, res:Response, next: NextFunction): Promise<void> => {
    const { username} = req.body
    if(username){
        const usernameAlreadyExist = await AppDataSource.getRepository(Client).findOneBy({ username })
    
        if(usernameAlreadyExist){
            throw new AppError("Username already exists", 409)
        }
        
       
    }
 
    return next()
} 
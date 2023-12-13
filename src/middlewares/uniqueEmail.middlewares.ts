import { NextFunction, Request, Response } from "express"
import { AppDataSource } from "../data-source"
import { Client, Contact } from "../entities"
import { AppError } from "../errors/App.errors"

export const emailExists = async(req: Request, res:Response, next: NextFunction): Promise<void> => {
    const { email } = req.body
    if(email){
        const emailAlreadyExist = await AppDataSource.getRepository(Client).findOneBy({ email })
    
        if(emailAlreadyExist ){
            throw new AppError("Esse email já existe", 409)
        }
        
       
    }
 
    return next()
} 
export const emailContacts = async(req: Request, res:Response, next: NextFunction): Promise<void> => {
    const { email } = req.body
    if(email){
        const emailAlreadyExist = await AppDataSource.getRepository(Contact).findOneBy({ email })
    
        if(emailAlreadyExist ){
            throw new AppError("Esse email já existe", 409)
        }
        
       
    }
 
    return next()
} 
import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Client, Contact } from "../entities";
import { AppError } from "../errors/App.errors";

export const checkClientID = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    const clientId= await AppDataSource.getRepository(Client).findOneBy({id: req.params.id})
    if(!clientId){
        throw new AppError("Client not found", 404)
    }
    res.locals.clientId = clientId;
    
    return next()
}

export const checkContactsID = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    const contactId= await AppDataSource.getRepository(Contact).findOneBy({id: req.params.id})
    if(!contactId){
        throw new AppError("Contact not found", 404)
    }
    res.locals.contactId = contactId;
    return next()
}
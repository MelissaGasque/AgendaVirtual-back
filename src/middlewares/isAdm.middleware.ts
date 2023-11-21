import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/App.errors";

export const isAdmTrue = async(req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { sub, admin } = res.locals.decoded;
   
    if (admin === true) return next();

    if ( id !== sub ) {
      throw new AppError("Insufficient permission", 403);
    }

    return next()
}
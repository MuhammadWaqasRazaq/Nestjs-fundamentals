import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class Middleware3 implements NestMiddleware{
    use( req: Request, res: Response, next:NextFunction ) {
        console.log("middleware 3 class based")
        next()
        
    }
}
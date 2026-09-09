import { NextFunction, Request, Response } from "express"

export default (req:Request, res:Response, next:NextFunction)=>{
    console.log("middleware 1")
    next()
}
import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class MyMiddleware implements NestMiddleware {
  use(request: Request, response: Response, next: NextFunction) {
    const method = request.method
    const url = request.url
    console.log(`METHOD: ${method}\nURL: ${url}  Name: MyMiddleware`)
    next()
  }
}

export function loggerFunction(request: Request, response: Response, next: NextFunction) {
  const method = request.method
  const url = request.url
  console.log(`METHOD: ${method}\nURL: ${url} Name: loggerFunction`)
  next()
}

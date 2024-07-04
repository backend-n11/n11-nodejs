import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter, HttpException, HttpStatus, UnauthorizedException } from "@nestjs/common";
import { Request, Response } from "express";

export class CustomException extends HttpException {
  constructor(public readonly message: string, public readonly statusCode: HttpStatus, error: Error) {
    super(message, statusCode)
    if (error instanceof UnauthorizedException) {
      console.log(
        'UnauthorizedException'
      )
    } else if (error instanceof BadRequestException) {
      console.log(
        'BadRequestException'
      )
    }
  }
}






@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    console.log(exception, host)
    const ctx = host.switchToHttp()
    const request = ctx.getRequest() as Request
    const response: Response = ctx.getResponse()
    const next = ctx.getNext()

    const method = request.method
    const url = request.url
    const statusCode = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
    const message = exception instanceof HttpException ? exception.getResponse() : HttpStatus.INTERNAL_SERVER_ERROR;

    response.status(statusCode).json({
      method,
      message,
      url,
      statusCode,
      timestamp: new Date().toString()
    })




    // throw new Error("Method not implemented.");
  }

}

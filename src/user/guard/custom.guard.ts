import { CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";

export class CustomGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    // const request: Request = context.switchToHttp().getRequest()
    const request = context.switchToHttp().getRequest() as Request

    const token = this.getToken(request)

    console.log(`
      METHOD: ${request.method}
      URL: ${request.url}
      TOKEN: ${token}
      `)

    // console.log(request.body)

    request['user'] = request.body

    return true
  }

  getToken(req: Request) {
    const [type, token] = req.headers.authorization.split(" ")
    if (type !== "Bearer") {
      throw new UnauthorizedException()
    }

    return token
  }


}
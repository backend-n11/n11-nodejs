import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignInDto, SignUpDto } from "./dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  signup(@Body() singUpDto: SignUpDto) {
    return this.authService.signup(singUpDto);
  }

  @Post("signin")
  signin(@Body() singInDto: SignInDto) {
    return this.authService.signin(singInDto);
  }

  @Post("refresh")
  refresh(@Body() refreshTokenDto: Record<string, any>) {
    return this.authService.refreshToken(refreshTokenDto);
  }

  @Get("profile")
  profile(@Param("id") id: string) {
    return this.authService.findOne(+id);
  }

  @Patch("update")
  update(@Body() updateAuthDto: Record<string, any>) {
    return this.authService.update(updateAuthDto);
  }

  @Delete("logout")
  logout(@Param("id") id: string) {
    return this.authService.remove(+id);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignInDto, SignUpDto } from "./dto";
import { LoggingInterceptor } from "./loggingInterceptor";
import { Logger } from "@nestjs/common";

@Controller("auth")
// @UseInterceptors(LoggingInterceptor)

export class AuthController {
  private readonly logger = new Logger(AuthController.name)
  constructor(private readonly authService: AuthService) {}

  @Get("healthcheck")
// @UseInterceptors(LoggingInterceptor)
  healthCheck(): string {
    this.logger.error("SALOM DUNYO XATOSI")
    return "cool";
  }

  @Post("signup")
  signup(@Body() singUpDto: SignUpDto) {
    return this.authService.signUp(singUpDto);
  }

  @Post("signin")
  signin(@Body() singInDto: SignInDto) {
    return this.authService.signIn(singInDto);
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

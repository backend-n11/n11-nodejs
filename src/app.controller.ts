import { Controller, Get } from '@nestjs/common';
import { SkipThrottle } from "@nestjs/throttler";

@SkipThrottle()
@Controller()
export class AppController {

  @Get()
  getRouteOne() {
    return "salom dunyo!"
  }



  @Get("test")
  getRouteTwo() {
    for (let i = 0; i < 100000000000; i++) {

    }

    return "salom dunyo from test route!"
  }

  @SkipThrottle()
  @Get("skip")
  skipRouteOnRateLimit() {
    return "ok "
  }
}

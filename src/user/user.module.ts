import { Module } from '@nestjs/common';
import { APP_GUARD } from "@nestjs/core";
import { RoleGuard } from "./guard/role.guard";
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService,
    // {
    // provide: APP_GUARD,
    // // useClass: CustomGuard
    // useValue: new CustomGuard()
    // }

    {
      provide: APP_GUARD,
      useClass: RoleGuard
    }
  ],

})
export class UserModule { }

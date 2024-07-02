import { Controller, Get } from "@nestjs/common";

//TODO: implement todo controller logic :DONE
@Controller("tdo")
export class TodoController {
  @Get()
  greet(): string {
    return `Hello world! from todo`;
  }
}

import { IsBoolean, IsString } from "@nestjs/class-validator"


export class CreateTodoDto {
  @IsString()
  title: string

  @IsString()
  description: string

  @IsBoolean()
  done: boolean
}

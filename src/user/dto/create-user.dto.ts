import { IsEmail, IsNumber, IsString } from "class-validator"


export class CreateUserDto {
  @IsString()
  firstName: string

  @IsString()
  lastname: string

  @IsString()
  @IsEmail()
  email: string

  @IsString()
  password: string

  @IsString()
  gender: "male" | "female"

  @IsNumber()
  age: number
}

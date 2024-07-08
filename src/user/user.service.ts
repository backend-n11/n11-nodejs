import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { SignInDto, SignUpDto } from "src/auth/dto";
import { NotFoundError } from "rxjs";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class UserService {
  constructor(
    private readonly jwtService: JwtService,
    // private readonly configService:ConfigService
  ) {}
  private readonly users: any = [
    {
      name: "ali",
      email: "ali@gmail.com",
      password: "12345",
    },
    {
      name: "vali",
      email: "vali@gmail.com",
      password: "12345",
    },
  ];

  signUp(signUpDto: SignUpDto) {}
  signIn(signInDto: SignInDto) {
    // const secret  = this.configService.get<string>("jwt.acces.")
    // const secret2  = this.configService.get<string>("SECRET")

    // console.log({secret})
    const user = this.users.find(
      (user) =>
        user.password == signInDto.password && user.email == signInDto.email,
    );
    if (!user) {
      throw new NotFoundError("this user not found");
    }

    const payload = {
      sub: user.email,
      name: user.name,
    };



    const accessToken = this.jwtService.sign(payload, {
      secret: "qwert1235",
      expiresIn: "10m",
    });

    const refreshToken = this.jwtService.sign(payload, {
      secret: "asdfg987",
      expiresIn: "10d",
    });

    return {
      accessToken,
      refreshToken,
    };
  }

  create(createUserDto: CreateUserDto) {
    return "This action adds a new user";
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  generateToken() {}
  verifyToken() {}
}

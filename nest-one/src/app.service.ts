import { Injectable } from "@nestjs/common"
import { IUser } from "./interface/user.interface"

@Injectable()
export class AppService {
  private users: IUser[] = [{
    "name": "azizbek",
    "age": 12,
    "isMerried": false,
    "id": 1
  }]

  findAll(): IUser[] {
    return this.users
  }

  create(user: Omit<IUser, 'id'>): IUser {
    const id = this.users.length + 1
    const newUser = { ...user, id }
    this.users.push(newUser)
    return newUser
  }

  update(id: number, user: Partial<IUser>) {
    // console.log({ id, user });

    for (let i = 0; i < this.users.length; i++) {
      // console.log(user.id === id)
      if (this.users[i].id === id) {
        this.users[i] = { ...this.users[i], ...user }
        // console.log(this.users[i]);
        return this.users[i]
      }
    }
  }
  delete(id: number) {
    const index = this.users.findIndex(user => user.id === id)
    const deletedUser = this.users.splice(index, 1)
    return deletedUser
  }
}
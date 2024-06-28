// class decorator
function logClassName(target: any) {
  console.log(target.name, "1")
}

function logClassName2(target: any) {
  console.log(target.name, "2")
}

function LogProperty(target: any, propertyKey: string) {
  // console.log(target, propertyKey)
  console.log(`Property created: ${propertyKey}`);
}

function LogProperty2(target: any, propertyKey: string) {
  // console.log(target, propertyKey)
  console.log(`Property created: ${propertyKey} 2`);
}

@logClassName
@logClassName2
class Todo {

  @LogProperty
  @LogProperty2
  name: string


  constructor(name: string) {
    this.name = name
  }
}





/*
interface IUser {
  age: number
  name: string
}

class User {
  age: number = 32
  constructor(public name: string) { }
}
function updateAge(obj: IUser): IUser {
  // console.log(obj)
  obj.age = 1
  return obj
}

function updateName(obj: IUser): IUser {
  obj.name = "bilmasvoy"
  return obj
}



// const user = new User()
const user = updateName(updateAge(new User("Bilol")))

console.log(user, "1")




// console.log(user.age)*/
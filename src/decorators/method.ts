// Method decorator
// function setMinLength(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//   let originalMethod = descriptor.value
//   descriptor.value = function (...args: any[]) {
//     console.log(args)
//     if (args[0].length < 5) {
//       console.log("Invalid value");
//       return "invalid"
//     }
//     originalMethod.apply(this, args);
//   }
// }


function setMinLength(length: number) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    let originalMethod = descriptor.value
    descriptor.value = function (...args: any[]) {
      console.log(args)
      if (args[0].length < length) {
        console.log("Invalid value");
        return "invalid"
      }
      originalMethod.apply(this, args);
    }
  }
}

class Register {
  constructor(public name: string, public password: string) { }

  @setMinLength(5)
  updatePassword(newPassword: string) {
    this.password = newPassword
  }
}

const register = new Register("John", "12345qwer")

register.updatePassword("abcsasa")
console.log(register)




function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log(`${propertyKey}  is calling`)
}



function format(target: any, propertyKey: string) {
  console.log(`Property Decorator: ${propertyKey} in class ${target.constructor.name}`);
}

class User {
  private static userType: string = "Generic";
  private _email: string;

  @format
  public username: string;
  public addressLine1: string = "";
  public addressLine2: string = "";
  public country: string = "";

  constructor(username: string, email: string) {
    this.username = username;
    this._email = email;
  }

  @Log
  address(): any {
    return `${this.addressLine1}\n${this.addressLine2}\n${this.country}`;
  }

}

const p = new User("exampleUser", "example@exmaple.com");
p.address()




////
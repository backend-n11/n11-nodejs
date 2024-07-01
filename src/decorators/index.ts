// function Log(constructor: Function) {
//     console.log(constructor.name)
//     constructor.prototype.fixBugInDevelopement = () => {
//         console.log("fixing bug in development")
//     }
//     constructor.prototype.developers = ["Shavkat", "Abduvohid"]

//     Object.seal(constructor);
//     Object.seal(constructor.prototype);

// }

function Log<T extends { new(...args: any[]): {} }>(baseClass: T) {
  return class extends baseClass {
    constructor(...args: any[]) {
      super(...args);
      ; (this as any)["fixBugInDevelopement"] = () => {
        console.log("fixing bug in development")
      }
    }
  }
}




function LogWithMethod(methodName: string, cb: any) {
  return function <T extends { new(...args: any[]): {} }>(baseClass: T) {
    return class extends baseClass {
      constructor(...args: any[]) {
        super(...args);
        ; (this as any)[methodName] = cb
      }
    }
  }
}




@LogWithMethod("password", "qwer12345")
@LogWithMethod("log", function () {
  console.log(this.budget)
})
@Log
class Project {
  budget: number = 1000;
  [K: string]: any

  constructor() {
  }

  writeTest() {
    console.log("tests are importent!")
  }

  fixBugProduction() {
    console.log("fixning bug is very importent!")
  }
}

const project = new Project()

project.fixBugInDevelopement()
project.log()
console.log(
  project.password
)

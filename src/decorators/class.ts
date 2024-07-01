
function addMethodInPrototype(constructor: Function) {
  constructor.prototype.startEngine = () => {
    console.log("Engine is starting")
  }
}
function addMethod(methodName: string, cb: Function) {
  return function (constructor: Function) {
    constructor.prototype[methodName] = cb
  }
}
// addYearProperty
function addYearProperty(year: number) {
  return function (constructor: Function) {
    constructor.prototype.year = year
  }
}

function addYearPropertyWithClass(year: number) {
  return function <T extends { new(...args: any[]): {} }>(baseClass: T) {
    return class extends baseClass {
      constructor(...args: any[]) {
        super(...args);
        (this as any)["year"] = year
      }
    }
  }
}


@addYearPropertyWithClass(1998)
// @addYearProperty(1999)
@addMethod("log", function () {
  console.log(`this is ${this.name}`)
})
@addMethodInPrototype
class Car {
  [K: string]: any;
  constructor(public readonly name: string) {
  }
}


const car = new Car("BMW")
car.startEngine()
car.log()
console.log(car.year)

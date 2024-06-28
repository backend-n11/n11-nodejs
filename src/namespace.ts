namespace Space1 {
  export class Car {
    constructor(public name: string, public model: string) {
    }
    drive(): void {
      console.log(`Driving car in space 1`)
    }
  }
}

namespace Space2 {
  export class Car {
    constructor(public name: string, public model: string) {
    }
    drive(): void {
      console.log(`Driving car in space 2`)
    }
  }
}


namespace Space3 {
  export interface User {
    name: string
    age: number
  }
  export class Car {
    constructor(public name: string, public model: string) {
    }
    drive(): void {
      console.log(`Driving car in space 3`)
    }
  }
}
const car1 = new Space1.Car("BMW", "S6")
const car2 = new Space2.Car("AUDI", "R8")
const car3 = new Space3.Car("Rolls Roys", "R8")
console.log(car1.drive())
console.log(car2.drive())
console.log(car3.drive())

const user: Space3.User = {
  name: "sas",
  age: 1
}

process.env

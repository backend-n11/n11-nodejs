
class Person {
  // protected name: string
  // public readonly age: number
  // private readonly password: number
  constructor(protected name: string, public readonly age: number, private readonly password: number) {

    // this.name = name
    // this.age = age
    // this.password = password
  }
  setName(name: string) {
    this.name = name
  }
  getName() {
    return this.name
  }
  greet() {
    console.log(`Assalomy alaykum ${this.age} lik ${this.name}`)
  }
}

class Employee extends Person {


  constructor(name: string, age: number, public employeeId: number, password: number) {
    super(name, age, password)
  }

  log() {
    console.log(this)
  }

  logName() {
    console.log(this.name, this.age)
  }
}

// class Worker extends Employee {
//   constructor(protected name: string, public readonly age: number, private readonly password: number, private employeeId: number, public readonly workerId: number) {
//     super(name, age, password, employeeId)
//   }

// }

const person2 = new Person("azizbek", 22, 123)
const employee = new Employee("azizbek", 22, 1, 22)


employee.log()
employee.setName("sas")
employee.logName()

console.log(person2.setName("bilolbek"))
console.log(person2.getName())
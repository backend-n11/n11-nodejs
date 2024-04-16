class Person {
  constructor(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
  }
  run() {
    console.log(`${this.name} is running`)
  }
}

class Employee extends Person {
  constructor(name, age, gender) {
    super(name, age, gender)
  }
  logName() {
    console.log(this.name)
  }
  work() {
    console.log(`${this.name} is Working`)
  }
}

class Student extends Employee {
  constructor(name, age, gender) {
    super(name, age, gender)
  }
  study() {
    console.log(`${this.name} is learning`)
  }
}
const st = new Student("MRX", 33, "male")
console.log(st.run())
console.log(st.constructor == )
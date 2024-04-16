function Person() {
  this.name = 'John'
}

Person.prototype.age = 24
Person.prototype.gender = "male"
Person.prototype.myLog = function () {
  console.log("this is a log")
}


const person = new Person()


function Employee() {
  this.__proto__ = person.__proto__
}
const emp = new Employee()

// console.log(person.__proto__)
console.log(emp.__proto__)

















1.
class TodoList {
  tasks = []
}

2.

class TodoList {
  constructor() {
    this.tasks = []
  }
}

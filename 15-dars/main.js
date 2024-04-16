class Person {

  constructor(firstName, LastName, age, gender) {
    this.firstName = firstName
    this.LastName = LastName
    this.age = age
    this.gender = gender
  }
  #logName() {
    return (`${this.firstName} ${this.LastName}, ${this.age}, ${this.gender}`)
  }
  static size() {
    console.log("THIS IS A SIZE")
  }

}



const person = new Person("xamidullo", "xudoyberdiyev", 44, "male")

console.log(Person.size())
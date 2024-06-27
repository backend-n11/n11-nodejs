class Animal {
  constructor(public name: string) {
  }
  sound() {
    console.log("gerfil")
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name)
  }
  sound(): void {
    console.log("Miyow")
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name)
  }
  sound(): void {
    console.log("WOW")
  }
}


class Bird extends Animal {
  constructor(name: string) {
    super(name)
  }
  sound(): void {
    console.log("Chug'ur chug'ur")
  }
}

const animal = new Animal("gerfil")
const cat = new Cat("baroqvoy")
const dog = new Dog("xatiko")

animal.sound()
cat.sound()
dog.sound()





// 

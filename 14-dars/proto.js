let obj = {
  name: "X",
};

obj.__proto__.isNaN = function (arguments) {
  if (typeof arguments == "number") {
    console.log("number");
    return "number";
  } else {
    console.log("this is not number");
  }
};

obj.isNaN(12);

function A() {}

let a = new A();

a.__proto__.method = function (arguments) {
  console.log(arguments);
};

a.method("salom");

let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};

let admin = {
  __proto__: user,
  isAdmin: true,
};

console.log(admin.__proto__);

class Person {
  name = "xamidullo";
}

class Coder extends Person {}

console.log(new Coder().name);

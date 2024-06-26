export const add = (a: number, b: number): number => {
  return a + b;
};

export const sub = (a: number, b: number): number => {
  return a - b;
};

export const mul = (a: number, b: number): number => {
  return a * b;
};

export const div = (a: number, b: number): number => {
  return a / b;
};

const obj = {
  a: 1,
  b: "salom",
};

const filed = "a";
console.log(obj.a);
console.log(obj[filed]);

interface Car {
  make: string;
  model: string;
  year: string;
}

// type CarKeys = "make" | "year" | "model";

type CarKeys = keyof Car;
const a: CarKeys = "make";
const b: CarKeys = "year";

enum Role {
  admin,
  user,
}

type R = keyof Role;

const d: R = "user";

function printCarProPerty(car: Car, key: CarKeys) {
}

printCarProPerty(car, key);

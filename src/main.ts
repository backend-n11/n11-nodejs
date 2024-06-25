import { add } from "./math"


const d: string | number | boolean = 1 + 1


type Role = "admin" | "user" | "superAdmin"

const role: Role = "admin"


console.log(
  add(1, 2)
)

const isMerrid: boolean = false;


const age: number = 12;
const balance: number = 1.23456;



const ismi: string = "oybek";
let oti: string = "shavkat";
oti = "rustam";


type Ojb = {
  name: string,
  age: number,
  isMerrid?: boolean
}

const obj: Ojb = {
  name: "azizbek",
  age: 12,
  isMerrid: true
};

const obj2: Ojb = {
  name: "bilol",
  age: 13,
};

type A = {
  a: number,
  b: number
}

//todo 2  typeni qo'shib bitta type qilish
type b = {
  c: number,
  d: number
}


interface AddFun {
  a: number,
  b: number
}

interface AddFun {
  c: number,
  d: number
}



const testObj: AddFun = {
  a: 1,
  b: 2,
  c: 2,
  d: 2,
}


type Add = (a: number, b: number) => number

const add1 = (a: number, b: number): number => {
  return a + b
}

const add2 = (arg: AddFun): number => {
  return arg.a + arg.b
}

// add2({ a: 1, b: "1" })

// interface A {
//   a: string
//   b: string
// }
type A = "name" | "age" | "gender"


type F = Record<A, string>





const f: F = {
  name: "11",
  age: "1",
  gender: "sas"
}

interface E {
  a?: string,
  b?: string
}

const e: E = {
}

type ERquired = Required<E>

type EOptinal = Partial<ERquired>


type O = Omit<EOptinal, "b">

type K = O & {
  b: string
}


const oj: K = {
  a: "11",
  b: "12"
}

const obj: ERquired = {
  a: "asa",
  b: "sas"
}





//

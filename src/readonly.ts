type IPerson = {
  name: string
  age: number
  gender?: "M" | "F" | "male" | "female"
  isMerried?: boolean
}

type MyReadOnly<T> = {
  readonly [P in keyof T]: T[P]
}

const person: MyReadOnly<IPerson> = {
  name: "guli",
  age: 22,
  gender: "female",
  isMerried: false
}

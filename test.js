

const func2 = (a, b) => {
  throw new Error("xatolik")
}
const anyFUnc = (a, b) => {
  func2()
}


const add = (a, v) => {
  try {

    const result = anyFUnc(a, v)


    if (!result)
      return "Error"

    return result
  } catch (error) {
    console.error(error.stack, error.message)
  }
}




add(1, 2)

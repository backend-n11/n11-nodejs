const once = (fn) => {
  let called = false
  return function (...args) {
    console.log(...args)
    if (!called) {
      called = true
      const sum = fn(...args)
      return [{ "calls": 1, "value": sum }]

    }
    return undefined
  }
}
const fn = (a, b, c) => (a + b + c)

const onceFn = once(fn)
onceFn(1, 2, 3) // 6

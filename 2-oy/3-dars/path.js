import path from "node:path"

// console.log(__dirname)
// console.log(__filename)


console.log(path.join(process.argv[1], "..",))
console.log(path.join(process.argv[1], "..", ".."))
console.log(path.join(process.argv[1], "..", "..", ".."))
console.log(path.basename(process.argv[1]))
console.log(path.basename("clint.js"))

// console.log(path.isAbsolute("/home/pro/najot-talim/N11/2-oy/3-dars/os.txt"))
// console.log(path.extname("/home/pro/najot-talim/N11/2-oy/3-dars/os.txt"))
// console.log(path.join(process.argv[1], "../"))

// console.log(path.isAbsolute(path.join(process.argv[1], "../")))
// console.log(process.argv[1])
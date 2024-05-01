import fs from "node:fs"



fs.mkdir('./node_modules/express/main', { recursive: true }, (err) => {
  if (err) throw err
})



fs.readdir('../../../../', (err, data) => {
  if (err) throw err
  console.log(data)
})
import fs from "node:fs"
import path from "node:path"

export const readFile = async (fileName) => {
  try {
    const filePath = path.join(process.cwd(), "database", fileName)
    const result = await fs.readFileSync(filePath)
    return JSON.parse(result.toString())
  } catch (error) {
    console.error(error)
  }
}



export const writeFile = async (fileName, data) => {
  try {
    const filePath = path.join(process.cwd(), "database", fileName)
    const result = await fs.writeFileSync(filePath, JSON.stringify(data))
    return "OK"
  } catch (error) {
    console.error(error)
    return "Error"

  }
}
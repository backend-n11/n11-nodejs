
import { saveData } from "../services/index.js"

export const loginController = async (req, res) => {

  const data = await saveData()
  console.log(data)
  res.send("loginController")
}

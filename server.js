import app from "./src/app.js"
import { configuration } from './src/config/index.js';
import logger from "./src/logs/logger.js";



const PORT = configuration.server.port


process.on("uncaughtException", (err) => {
  logger.error(err.message)
  process.exit(1)
})


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

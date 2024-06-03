import app from "./src/app.js"

import logger from "./src/logs/logger.js";
const PORT = process.env.PORT || 4000



process.on("uncaughtException", (err) => {
  logger.error(err.message)
  process.exit(1)
})

setTimeout(() => {
  throw new Error("QASTDAN XATOLIK")
}, 1000);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

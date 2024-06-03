import logger from "../logs/logger.js"

const logMiddleware = (req, res, next) => {
  const struct = `URL: ${req.url} METHOD: ${req.method} PARAMS  ${req.params}`
  logger.http(struct)
  next()
}
export default logMiddleware
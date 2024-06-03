import { createLogger, transports, format, level } from "winston"
const { prettyPrint } = format;
import 'winston-mongodb'


const sillyLogger = createLogger({
  format: format.combine(
    format.timestamp(),
    format.json(),
    format.prettyPrint(),
    format.colorize({ all: true }),
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "application.log" }),
    new transports.MongoDB({
      level: "silly",
      db: "mongodb://localhost:27017/logs",
      collection: "silly",
      options: { useUnifiedTopology: true }
    })
  ]
})




const infoLogger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp(),
    format.json(),
    format.prettyPrint(),
    format.colorize({ all: true }),
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "application.log" }),
    new transports.MongoDB({
      level: "info",
      db: "mongodb://localhost:27017/logs",
      collection: "info",
      options: { useUnifiedTopology: true }
    })
  ]
})

infoLogger.warn("this is warn message")
infoLogger.info("this is info message")
infoLogger.error("this is error message")
infoLogger.debug("this is info message")
infoLogger.http("http:///localhost:3000/auth/signup ali")
console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$")
sillyLogger.warn("this is warn message")
sillyLogger.info("this is info message")
sillyLogger.error("this is error message")
sillyLogger.debug("this is info message")
sillyLogger.http("http:///localhost:3000/auth/signup ali")



// console.log('\x1B[31merror\x1B[39m')
// console.log('\x1B[32minfo\x1B[39m')
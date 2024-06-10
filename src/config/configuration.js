import { config } from "dotenv";
config()

export const configuration = {
  db: {
    mongo: {
      uri: process.env.MONGO_URI,
    },
    pg: {
      uri: process.env.POSTGRES_URI
    }
  },
  jwt: {
    accessToken: {
      salt: process.env.SALT_ROUND,
      secretKey: process.env.JWT_ACCESS_KEY,
      expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRESIN,
      algorithm: process.env.JWT_ACCESS_TOKEN_ALGORITHM
    },
    refreshToken: {
      salt: process.env.SALT_ROUND,
      secretKey: process.env.JWT_REFRESH_KEY,
      expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRESIN,
      algorithm: process.env.JWT_REFRESH_TOKEN_ALGORITHM
    }
  },
  server: {
    port: process.env.PORT,
  },
  nodeMailer: {
    email: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
    subject: process.env.EMAIL_SUBJECT,
    message: process.env.EMAIL_HTML
  },
  log: {
    level: process.env.LOG_LEVEL,
    dbUri: process.env.MONGODB_LOG_URI,
    dbCollection: process.env.MONGODB_LOG_COLLECTION
  }
}
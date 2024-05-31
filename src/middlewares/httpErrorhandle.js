import {
  HTTP_RESPONSE_CODE,
  APP_ERROR_MESSAGE
} from "../constants/HttpstatusCodes.js"



export class MyError extends Error {
  constructor (message, statuCode) {
    super(message)
    this.statuCode = statuCode
  }
}

import winston from 'winston'
import winstonMongodb from "winston-mongodb"

winstonMongodb.MongoDB

winston.configure({
  transports: [
    new (winston.transports.Console)({ json: false, colorize: true }),
    new (winston.transports.MongoDB)({
      db: 'mongodb://localhost/tests',
      collection: 'logs',
      level: 'info',
      capped: true
    }),
    new (winston.transports.MongoDB)({
      db: 'mongodb://localhost/tests',
      collection: 'warn',
      level: 'warn',
      capped: true
    }),
    new (winston.transports.MongoDB)({
      db: 'mongodb://localhost/tests',
      collection: 'http',
      level: 'http',
      capped: true
    }),
    new (winston.transports.MongoDB)({
      db: 'mongodb://localhost/tests',
      collection: 'debug',
      level: 'debug',
      capped: true
    }),
  ]
});


// const logger = new (winston.Logger)({
//   transports: [
//     new winston.transports.MongoDB({ dbUri: 'mongodb://localhost/tests', collection: 'logs_info', level: 'info' }),
//     new winston.transports.MongoDB({ dbUri: 'mongodb://localhost/tests', collection: 'logs_error', level: 'error' })
//   ]
// });
// logger.log('info', 'transaction ok');
// logger.error('transaction ok');
// logger.warn('transaction ok');
// logger.http('transaction ok');
// logger.debug('transaction ok');
// logger.silly('transaction ok');
//



const errorCollection = 'error-logs';
const warnCollection = 'warn-logs';
const infoCollection = 'info-logs';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
    // Custom log level formatter
    winston.format((info) => {
      if (info.level === 'error') {
        info.collection = errorCollection; // Set collection for errors
      } else if (info.level === 'warn') {
        info.collection = warnCollection; // Set collection for warnings
      } else {
        info.collection = infoCollection; // Default collection for others
      }
      return info;
    })
  ),
  transports: [
    new winstonMongodb({
      db: 'mongodb://your_mongodb_uri',
    }),
  ],
});
logger.log('error', 'This is an error message');
logger.log('warn', 'This is a warning message');
logger.log('debug', 'This is a debug message');

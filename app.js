// //DI

// function logger(arg) {
//   console.log(arg);
// }

// function loggerPro(arg) {
//   console.log(`THis IS PRO VERSION`, arg);
// }

// function calcAvrg(numbers) {
//   const result = numbers.reduce((a, b) => a + b);
//   logger(result);
//   return result;
// }

// function calcAvrgWithDI(numbers, cb) {
//   const result = numbers.reduce((a, b) => a + b);
//   cb(result);
//   return result;
// }


// export class AuthService {

//   singIn(props) {
//     console.log(props)
//   }
// }

// // @Controller()
// export class AuthController {
//   constructor(authService: AuthService) { }

// }


// const authController = new AuthController(new AuthService())



// calcAvrgWithDI([1, 2, 3, 4], logger);
// calcAvrgWithDI([1, 2, 3, 4], loggerPro);

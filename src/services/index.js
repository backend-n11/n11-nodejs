import User from "../models/index.js"

  ;
export const saveData = () => {

  const newUser = new User({
    email: "test@test.com",
    password: "1234567"
  })

  newUser.save()


  return newUser
}

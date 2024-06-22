import { User } from "./main.js";


const saveUser = (name, username) => {

const user = await User.create({ name, username});
return user

}

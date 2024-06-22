import { DataTypes, Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "postgres://postgres:12345@localhost:5432/postgres",
);

export const User = sequelize.define("User", {
  name: DataTypes.STRING,
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// const user = new User({
//   name: "xamidullo",
//   username: "mrx",
// });
// User
// const jane = await User.create({ name: 'Jane', username:"percey" });
// console.log(user);

// await User.sync();

// user.save();
// // the defined model is the class itself
// console.log(User === sequelize.models.User); // true

// try {
//   await sequelize.authenticate();
//   console.log("Database connection");
// } catch (error) {
//   console.log(error);
// } finally {
//   sequelize.close();
// }

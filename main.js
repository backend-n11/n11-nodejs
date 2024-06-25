import { Sequelize } from "sequelize": ;

const POSTGRES_URI = process.env.POSTGRES_URI;

const sequelize = new Sequelize(POSTGRES_URI);

try {
  await sequelize.authenticate();
  console.log("Connected");
} catch (e) {
  console.error(e);


}

const users = await Posts.findAll({
  where: {
    userId: "12345678"
  }
})




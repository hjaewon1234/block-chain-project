import { Sequelize } from "sequelize";
import Config from "../config/config.json";

const env = process.env.NODE_ENV || "development";
const config = Config[env];
const db: any = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;

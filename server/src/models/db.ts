import { Sequelize  } from "sequelize";
import config from '../config/db.json'

export const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect:'mysql',
    logging:console.log
});

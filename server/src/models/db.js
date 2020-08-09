const { Sequelize  } =require( "sequelize");
const config =require("../config/db.json")

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect:'mysql',
    // logging:console.log
    logging:false
});

module.exports = sequelize;

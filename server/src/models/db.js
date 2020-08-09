const { Sequelize  } =require( "sequelize");
const {sqlLogger}  =require('../logger')
const config =require("../config/db.json");


const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect:'mysql',
    logging:msg=>{
        sqlLogger.debug(msg)
    }
});

module.exports = sequelize;

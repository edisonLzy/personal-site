const { Sequelize  } =require( "sequelize");
const {sqlLogger}  =require('../logger')
const config =require("../config/db.json");


const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect:'mysql',
    logging:msg=>{
        sqlLogger.debug(msg)
    },
    define: {
        // 解决中文录入的问题
        'charset':'utf8mb4'
    }
});

module.exports = sequelize;

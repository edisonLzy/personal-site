const { DataTypes }=require( 'sequelize');
const  sequelize =require( './db');

module.exports = sequelize.define('User', {
  'user_account': {
    type: DataTypes.STRING,
    allowNull: false
  },
  'user_tele': {
    type: DataTypes.STRING,
    allowNull: false
  },
  'user_password': {
    type: DataTypes.STRING,
    allowNull: false
  },
  'user_avator': {
    type: DataTypes.STRING,
    allowNull: false
  },
  'user_name': {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  paranoid: true
})
const { DataTypes } = require('sequelize');
const sequelize = require('./db');
module.exports = sequelize.define('Tag', {
    'tag_name': {
        type: DataTypes.STRING,
        allowNull: false
    },
    'tag_pic': {
        type: DataTypes.STRING(256),
        allowNull: false
    }
}, {
    paranoid: true
})
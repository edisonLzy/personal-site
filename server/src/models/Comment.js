const { DataTypes } = require('sequelize');
const sequelize = require('./db');
module.exports = sequelize.define('Comment', {
    'comment_likes': {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    'comment_date': {
        type: DataTypes.DATE,
        allowNull: false
    },
    'comment_content': {
        type: DataTypes.STRING(256),
        allowNull: false
    },
    'comment_parent_id': {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {
        sequelize,
        paranoid: true,
    }
)
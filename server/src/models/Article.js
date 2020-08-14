const { DataTypes } = require('sequelize');
const sequelize = require('./db');
module.exports = sequelize.define('Article', {
    'article_title':{
        type:DataTypes.STRING,
        allowNull: false
    },
    'article_type':{
        type:DataTypes.STRING,
        allowNull: false
    },
    'article_html': {
        type: DataTypes.TEXT,
        allowNull: false
    },
    'article_md': {
        type: DataTypes.TEXT,
        allowNull: false
    },
    'article_views': {
        type: DataTypes.STRING,
        allowNull: false
    },
    'article_likes': {
        type: DataTypes.STRING,
        allowNull: false
    },
},
    {
        paranoid: true,
    }
)
const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const {utcToLocal} =  require('../utils/time')
module.exports = sequelize.define('Article', {
    'article_cover':{
        type:DataTypes.VIRTUAL,
        get(){
            return `http://localhost:3000/files/icon/${this.article_type}.jpg`
        }
    },
    'time':{
        type:DataTypes.VIRTUAL,
        get(){
            return utcToLocal(this.createdAt);
        }
        
     },
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
        allowNull: false,
        defaultValue:'0'
    },
    'article_likes': {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:'0'
    },
    'article_navigation': {
        type: DataTypes.TEXT,
        allowNull: false
    },
    'article_desc':{
        type: DataTypes.TEXT,
        allowNull: false
    }
},
    {
        paranoid: true
    }
)
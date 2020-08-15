const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const {utcToLocal,getDiffTime} =  require('../utils/time')
module.exports = sequelize.define('Comment', {
    'comment_likes': {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:'0'
    },
    'comment_content': {
        type: DataTypes.STRING(256),
        allowNull: false
    },
    'comment_parent_id': {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:-1
    },
    'fromNow':{
        type:DataTypes.VIRTUAL,
        get(){
            return getDiffTime(this.createdAt);
        }
    },
    'createTime':{
        type:DataTypes.VIRTUAL,
        get(){
            return utcToLocal(this.createdAt);
        }
     }
},
    {
        paranoid: true,
    }
)
const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const {utcToLocal,getDiffTime} =  require('../utils/time')
module.exports = sequelize.define('Comment', {
    'comment_likes': {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:'0'
    },
    'comment_name':{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:'User'
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
    'level':{
        type: DataTypes.VIRTUAL,
        get(){
        //根据parent-id来确定层级
        return this.comment_parent_id=='-1'?0:1;
        }
        
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
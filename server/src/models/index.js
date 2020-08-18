const User = require('./User');
const Tag = require('./Tag');
const Comment = require('./Comment');
const Article = require('./Article');
const sequelize = require("./db");

(async function () {
    // 建立表关联
    relation()
    // 同步所有模块
    await sequelize.sync({ alter: true }).catch(e => {
        console.log(e)
    })
    console.log("🚀 所有模型均已成功同步.");
})()
// 建立表关联
function relation() {
    User.hasMany(Article, {
        foreignKey: {
            name: 'user_id'
        }
    });
    Article.belongsTo(User,{
        as:'user',
        foreignKey:{
            name: 'user_id'
        }
    })
    
    User.hasMany(Comment, {
        foreignKey: {
            name: 'user_id'
        }
    });
   
    Article.hasMany(Comment, {
        as:'comment',
        foreignKey: {
            name: 'article_id'
        }
    })
    Comment.belongsTo(Article,{
        foreignKey:{
            name:'article_id'
        }
    })
    Article.belongsToMany(Tag, {
        through: 'Articles_Tags_mapping',
    })

}
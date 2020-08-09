// 管理所有的模型 建立表之间的关联 
import { sequelize } from './db';
import {User} from './User';
// import {initArticle} from './Article';
// import {initTag} from './Tag';
// import {initComment} from './Comment'
// export const Article = initArticle();
// export const Tag = initTag();
// export const Comment = initComment();

export default async function(){
      console.log(User)
        // // 建立表关系 
        // User.hasMany(Article,{
        //     foreignKey: {
        //         name: 'user_id'
        //       }
        // });

        // User.hasMany(Comment,{
        //     foreignKey: {
        //         name: 'user_id'
        //     }
        // });

        // Article.hasMany(Comment,{
        //      foreignKey:{
        //          name:'article_id'
        //      }
        //  })
         
        //  Article.belongsToMany(Tag,{
        //      through:'Articles_Tags_mapping',
             
        //  })

        await sequelize.sync({
            alter:true
        })
        console.log("所有模型均已成功同步.");
}
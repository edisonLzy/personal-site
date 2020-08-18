const { asyncValidate, validate } = require('../utils/validate');
const {col,cast} = require("sequelize");
const Comment = require('../models/Comment');
const {formateReturn } = require('../utils');
// 校验规则
const Rules = {
    add: {
        article_id: {
            presence: {
                allowEmpty: false,
            }
        },
        comment_content: {
            presence: {
                allowEmpty: false,
            }
        },
        comment_name: {
            presence: {
                allowEmpty: false,
            }
        },
    },
    likes: {
      id:{
        presence: {
            allowEmpty: false,
        } 
      }
    },
    list:{
        // article_id: {
        //     presence: {
        //         allowEmpty: false,
        //     }
        // } 
    }
}
module.exports = {
    async add(info,req) {
        // 数据校验
        const isValid = await asyncValidate(info, Rules.add);
        if (isValid !== true) return isValid;
        const {article_id,comment_content,comment_name} = info;
        // 没有用户的id则表明是匿名守护
        const {userId:user_id} = req;
        const target = {
            article_id,
            user_id,
            comment_content,
            comment_name
        }
        const result = await Comment.create(target).catch(e=>{
            console.log(e)
        });
        return formateReturn(result.toJSON())
    },
    async likes(info) {
        const isValidate = validate(info, Rules.likes);
        if (!!isValidate) return isValidate;
        const { id } = info;
        const result = await Comment.findOne({
            attributes: ["comment_likes"],
            where: {
                id
            }
        })
        if(!result) return formateReturn(null);
        const data = result.toJSON();
        let count = data.comment_likes;
        await Comment.update({
            comment_likes: ++count
        }, {
            where: {
                id
            }
        }
        )
        return formateReturn(count)
    },
    async delete(info){
      // 数据校验
        const isValid = await asyncValidate(info, Rules.likes);
        if (isValid !== true) return isValid;
        const { id } = info;
        await Comment.destroy({
            where:{
                id
            }
        })
        return formateReturn(true)
    },
    async list({ page = 1, limit = 10, ...info }) {
        const { date='', likes='',article_id=''} = info;
        // const isValid = await asyncValidate(info, Rules.list);
        // if (isValid !== true) return isValid;
        let order = [];
        let where = {};
        if(!!likes){
            order.push([cast(col('comment_likes'), 'SIGNED'), likes])
        }
        if(!!date){
            order.push(["createdAt",date])
        }
        if(!!article_id){
            where = {
                article_id
            }
        }
        const result = await Comment.findAndCountAll({
            order,
            where,
            attributes: { exclude: ['updatedAt','deletedAt'] },
            offset: (page - 1) * limit,
            limit: +limit
        })
        return formateReturn({
            total: result.count,
            data: JSON.parse(JSON.stringify(result.rows)),
        })
    },
}
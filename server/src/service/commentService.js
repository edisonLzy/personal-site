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
        content: {
            presence: {
                allowEmpty: false,
            }
        }
    },
    likes: {
      id:{
        presence: {
            allowEmpty: false,
        } 
      }
    },
}
module.exports = {
    async add(info,req) {
        // 数据校验
        const isValid = await asyncValidate(info, Rules.add);
        if (isValid !== true) return isValid;
        const {article_id,content:comment_content} = info;
        const {userId:user_id} = req;
        const target = {
            article_id,
            user_id,
            comment_content
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
        const { date='', likes='' } = info;
        let order = [];
        if(!!likes){
            order = [cast(col('comment_likes'), 'SIGNED'), likes]
        }
        if(!!date){
            order =  ["createdAt",date]
        }
        const result = await Comment.findAndCountAll({
            order: [order],
            attributes: { exclude: ['updatedAt','deletedAt','article_id'] },
            offset: (page - 1) * limit,
            limit: +limit
        })
        return formateReturn({
            total: result.count,
            data: JSON.parse(JSON.stringify(result.rows)),
        })
    },
}
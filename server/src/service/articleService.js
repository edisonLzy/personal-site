const { asyncValidate, validate } = require('../utils/validate');
const { Op,cast,col } = require("sequelize");
const Article = require('../models/Article');
const Comment = require('../models/Comment');
const User = require('../models/User');
const { mapping, formateReturn,toLowerCase } = require('../utils');
// 校验规则
const Rules = {
    add: {
        title: {
            presence: {
                allowEmpty: false,
            }
        },
        type: {
            presence: {
                allowEmpty: false,
            }
        },
        md: {
            presence: {
                allowEmpty: false,
            }
        },
        html: {
            presence: {
                allowEmpty: false,
            }
        },
        desc: {
            presence: {
                allowEmpty: false,
            }
        },
    },
    list: {
        type: {
            isPrimitive: true
        },
        title: {
            isPrimitive: true
        }
    },
    detail: {
        id: {
            presence: {
                allowEmpty: false,
            },
            isPrimitive: true
        }
    },
    update: {
        id: {
            presence: {
                allowEmpty: false,
            },
            isPrimitive: true
        },
        title: {
            presence: {
                allowEmpty: false,
            }
        },
        type: {
            presence: {
                allowEmpty: false,
            }
        },
        md: {
            presence: {
                allowEmpty: false,
            }
        },
        html: {
            presence: {
                allowEmpty: false,
            }
        },
    }
}
module.exports = {
    async add(info, req) {
        // 数据校验
        const isValid = await asyncValidate(info, Rules.add);
        if (isValid !== true) return isValid;
        const target = mapping(info, 'article');
        target['user_id'] = req.userId;
        const ins = await Article.create(target);
        return formateReturn(ins);
    },
    async list({ page = 1, limit = 10, ...info }) {
        const { type = '', title = '', views='',date = '' } = info;
        const isValidate = validate({ type, title }, Rules.list);
        if (!!isValidate) return isValidate;
        // 排序
        let order = [];
        if(!!views){
            order.push([cast(col('article_views'), 'SIGNED'), views])
        }
        if(!!date){
            order.push(["createdAt",date])
        }
        // 筛选
        let where = {};
        if(!!type){
            where.article_type = {
                [Op.eq]: toLowerCase(type),
            }
        }
        if(!!title){
            where.article_title = {
                [Op.like]: `%${toLowerCase(title)}%`,
            }
        }
        const result = await Article.findAndCountAll({
            attributes: ["id","article_desc","article_title", "article_type", "article_views","article_cover","createdAt","time"],
            order,
            where,
            include:[{
                model:User,
                as:'user',
                attributes:['user_name']
            }],
            offset: (page - 1) * limit,
            limit: +limit,
        })
        return formateReturn({
            total: result.count,
            records: JSON.parse(JSON.stringify(result.rows)),
        })
    },
    async detail(info) {
        const isValidate = validate(info, Rules.detail);
        if (!!isValidate) return isValidate;
        const { id } = info;
        const result = await Article.findOne({
            attributes: ["id", "article_title", "article_type", "article_html", "article_likes", "article_views","time"],
            where: {
                id
            },
            include: [
            {
                model:User,
                as:'user',
                attributes:["user_name"]
            }
        ]
        })
        // 查询文章的评论
        // const ref = await result.getComments();
        // 文章访问量处理  
        const data = result.toJSON();
        let count = data.article_views;
        await Article.update({
            article_views: ++count
        }, {
            where: {
                id
            }
        }
        )
        return formateReturn(result)
    },
    async likes(info) {
        const isValidate = validate(info, Rules.detail);
        if (!!isValidate) return isValidate;
        const { id } = info;
        const result = await Article.findOne({
            attributes: ["article_likes"],
            where: {
                id
            }
        })
        const data = result.toJSON();
        let count = data.article_likes;
        await Article.update({
            article_likes: ++count
        }, {
            where: {
                id
            }
        }
        )
        return formateReturn(count)
    },
    async update(info) {
        // 数据校验
        const isValid = await asyncValidate(info, Rules.update);
        if (isValid !== true) return isValid;
        let { id, ...data } = info;
        data = mapping(data, 'article');
        await Article.update(data, {
            where: {
                id
            }
        })
        return formateReturn(true)
    },
    async delete(info) {
        // 数据校验
        const isValid = await asyncValidate(info, Rules.detail);
        if (isValid !== true) return isValid;
        const { id } = info;
        await Article.destroy({
            where: {
                id
            }
        })
        return formateReturn(true)
    }

}
const { asyncValidate, validate } = require('../utils/validate');
const { Op,cast,col,fn } = require("sequelize");
const Article = require('../models/Article');
const Comment = require('../models/Comment');
const User = require('../models/User');
const { mapping, formateReturn,toLowerCase ,sum,strToArr} = require('../utils');
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
            const arr = strToArr(type).map(toLowerCase);
            where.article_type = {
                [Op.in]:arr
            }
        }
        if(!!title){
            where.article_title = {
                [Op.like]: `%${toLowerCase(title)}%`,
            }
        }
        const result = await Article.findAndCountAll({
            attributes: [
                "id","article_desc","article_likes","article_title", "article_type", "article_views","article_cover","createdAt","time"],
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
        const _total = JSON.parse(JSON.stringify(result.rows));
        return formateReturn({
            total: result.count,
            records: _total,
        })
    },
    async detail(info) {
        const isValidate = validate(info, Rules.detail);
        if (!!isValidate) return isValidate;
        const { id } = info;
        const result = await Article.findOne({
            attributes: ["id", "article_title", "article_type", "article_html", "article_likes", "article_views","time","article_navigation"],
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
        if(data.article_navigation){
            data.article_navigation = JSON.parse(data.article_navigation)
        }else{
            data.article_navigation =[];
        }

        return formateReturn(data)
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
    },
    async analyze(){
         // 总 访问量 点赞树 评论数
         // 每种类型的 访问量 点赞树 评论数
         
         const result = await Article.findAll({
            attributes: [
              ['article_type','type'],
              [fn('sum', col('article_views')),'views'],
              [fn('sum', col('article_likes')),'likes'],
              [fn('count', col('article_type')),'count']
            ],
            // include:[
            //    { 
            //     model:Comment,
            //     as:'comment'
            //     }
            // ],
            group:'type'
         })
         const arr = result.map(i=>i.toJSON())

         let views = sum(arr,'views');
         let likes = sum(arr,'likes');
         let count = sum(arr,'count')
         return formateReturn({
            views,
            likes,
            count,
            records:arr
         })
    }
}
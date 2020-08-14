const { asyncValidate, validate } = require('../utils/validate');
const { Op} = require("sequelize");
const Article = require('../models/Article');
const { mapping, formateReturn } = require('../utils');
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
        const initial = {
            views: '0',
            likes: '0'
        }
        const target = mapping({ ...info, ...initial }, 'article');
        target['user_id'] = req.userId;
        const ins = await Article.create(target).catch(e => {
            console.log(e)
        });
         return formateReturn(ins);
    },
    async list({ page = 1, limit = 10, ...info }) {
        const { type='', title='' } = info;
        const isValidate = validate({ type, title }, Rules.list);
        if (!!isValidate) return isValidate;
        const result = await Article.findAndCountAll({
            attributes: ["id", "article_title", "article_type", "article_views"],
            where: {
                [Op.or]: [{
                    // 类型筛选
                    article_type: {
                        [Op.eq]: type,
                    },
                    // 文章title筛选
                    article_title: {
                        [Op.like]: `%${title}%`,
                    }
                }]
            },
            offset: (page - 1) * limit,
            limit: +limit,
        })
        return formateReturn({
            total: result.count,
            data: JSON.parse(JSON.stringify(result.rows)),
        })
    },
    async detail(info) {
        const isValidate = validate(info, Rules.detail);
        if (!!isValidate) return isValidate;
        const { id } = info;
        const result = await Article.findOne({
            attributes: ["id", "article_title", "article_type", "article_html", "article_likes", "article_views", "createdAt"],
            where: {
                id
            }
        })
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
            where:{
                id
            }
        })
        return formateReturn(true)
    }

}
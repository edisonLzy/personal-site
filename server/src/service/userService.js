const { asyncValidate, validate } = require('../utils/validate');
const md5 = require('md5');
const User = require('../models/User');
const { mapping } = require('../utils');
// 校验规则
const Rules = {
    sign: {
        name: {
            presence: {
                allowEmpty: false,
            },
            type: "string",
            length: {
                minimum: 1,
                maximum: 10,
            },
        },
        account: {
            presence: {
                allowEmpty: false,
            },
            numericality: {
                onlyInteger: true,
                strict: false,
            },
            accountExist: true,
            length: {
                minimum: 6,
                maximum: 10,
            },
        },
        avator: {
            presence: {
                allowEmpty: false,
            },
            type: 'string'
        },
        tele: {
            presence: {
                allowEmpty: false
            },
            format: /1\d{10}/,
        },
        password: {
            presence: {
                allowEmpty: false,
            },
            isNotCN: true,
            length: {
                minimum: 6,
                maximum: 10,
            },
        }
    }
}
// 扩展 校验函数
// 账号是否已经存在
validate.validators.accountExist = async function (v, o, k) {
    const c = await User.findOne({
        where: {
            [`user_${k}`]: v
        }
    });
    console.log(!c)
    if (!c) {
        return;
    }
    return `The ${k} alreedy exist in table User`;
}
module.exports = {
    async sign(info) {
        // 数据校验
        const isValid = await asyncValidate(info, Rules.sign);
        if (isValid !== true) return isValid;
        // 密码加密
        const password = info.password;
        info.password = md5(password)
        // 格式化传递过来的参数 tablename_props
        const target = mapping(info, 'user')
        const ins = await User.create(target);
        
        return ins.toJSON()
    },
    login() {

    }
}
const {Reg_CN} = require('./regExp');
/**
 * 去除字符串空格 以及 格式化对象
 * @param {*} obj 源对象
 * @param {*} tableName 表名
 * @param {*} concat 连接符号
 */
exports.mapping = (obj, tableName, concat = '_') => {
    return Object.keys(obj).reduce((acc, item) => {
        acc[tableName + concat + item] = obj[item].trim();
        return acc
    }, {})
}
/**
 * 非中文校验
 * @param {*} str 
 */
exports.isNotCN = str => !Reg_CN.test(str);

exports.getRandomStr = (length = 6)=> Math.random().toString(36).slice(length)

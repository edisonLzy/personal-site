const { Reg_CN } = require('./regExp');
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
/**
 * 随机length位字符
 * @param {*} length 
 */
exports.getRandomStr = (length = 6) => Math.random().toString(36).slice(length)
/**
 * v值是否是原始值
 * @param {*} v 
 */
exports.isPrimitive = v => (
    typeof v === 'string' ||
    typeof v === 'number' ||
    typeof v === 'symbol' ||
    typeof v === 'boolean'
)
/**
 * 格式化 接口返回值
 * @param {*} v 
 */
exports.formateReturn = v => {
    return !!v?{
        msg: 'success',
        data: !!v.toJSON?v.toJSON():v,
        code: 1
    }:{
        msg: 'error',
        data: null,
        code: 0
    }
}
/**
 * 小写
 * @param {*} v 
 */
exports.toLowerCase = v=>{
    if(!v && typeof v !== 'string')return '';
    return v.toLocaleLowerCase()
}
/**
 * 对数组中的某个字段求和
 * @param {*} arr 
 * @param {*} v 
 */
exports.sum = (arr,v)=>{
 if(!Array.isArray(arr))return;
 return arr.reduce((acc,i)=>{
     return (+acc) + +(i[v]);
 },0)
}
/**
 * 字符串转数组
 */
exports.strToArr = (str,sep=',')=>{
    if(!str&&str.indexOf(sep) !==-1&&str.length === 0)return [];
    return str.split(sep)
}
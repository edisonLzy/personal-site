const moment = require('moment');
/**
 * UTC时间转本地时间
 * @param {*} v 
 */
exports.utcToLocal = v=>{
    const i = moment(v);
    return i.isUTC && i.local().format('YYYY-MM-DD');
}
/**
 * 本地时间转UTC时间
 * @param {} v 
 */
exports.localToUtc = v =>+moment(v).utc();
/**
 * 获取到指定时间到 时间差
 * @param {} v 
 */
exports.getDiffTime = v =>moment(v).local().fromNow();


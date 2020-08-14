const jwt = require('jsonwebtoken');
const cookieKey = "token";
// 颁发JWT
const _maxAge = 3600 * 24;
const _secret = 'leezhiyu';
/**
 * 
 * @param {*} res 
 * @param {*} maxAge 几天记住密码
 * @param {*} info 
 */
exports.publish = function (res, maxAge = _maxAge, info = {}) {
  const token = jwt.sign(info, _secret, {
    expiresIn: maxAge
  })
  // 添加到cookie
  res.cookie(cookieKey, token, {
    maxAge: maxAge,
    path: "/"
  })
  // 其他设备
  res.header('authorization', token);
}
// 验证JWT
exports.verify = function (req) {
  //尝试从cookie中获取
  // const tokenCookie = req.cookies[cookieKey]; //cookie中没有
  const tokenHeader = req.headers.authorization;//获取header中的auth字段
  // if(tokenCookie !== tokenHeader)return null;
  // let cookieValidate = validateCookie(tokenCookie);
  let headerValidate = validateHeader(tokenHeader);
  return headerValidate;
}
function validateCookie(token) {
  try {
    const result = jwt.verify(token, _secret);
    return result;
  } catch (err) {
    return null;
  }
}
function validateHeader(token) {
  // authorization: bearer token
  token = token.split(" ");
  token = token.length === 1 ? token[0] : token[1];
  return validateCookie(token)
}
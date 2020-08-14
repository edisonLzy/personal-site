const  validate = require('validate.js')
const {isNotCN,isPrimitive}  = require('./index')
validate.validators.isNotCN = function(value, options, key, attributes){
    const r = isNotCN(value);
    if (r) {
       return;
     }
     return `the ${key} can not be Chinese`;
}
validate.validators.isPrimitive = function(value, options, key){
    const r = isPrimitive(value);
    if (r) {
       return;
     }
     return `the ${key} can not be Reference Type`;
}

// 重写async方法
async function asyncValidate(obj,rule){
    return new Promise(async (reo,rej)=>{
        try{
            await validate.async(obj,rule)
            reo(true)
        }catch(e){
            reo(e)
        }

    })
}
exports.validate = validate; 
exports.asyncValidate = asyncValidate;

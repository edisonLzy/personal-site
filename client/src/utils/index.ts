interface AnyObject{
    [index:string]:any
} 
interface AnyFunction{
    (...params:any[]):void
}
/**
 * 判断值的类型 
 * @param {*} value 检测值
 * @return {string} 值的类型
 */
export const getValueType = (val: any) => {
    let type = "";
    const _temp = Object.prototype.toString.call(val);
    const _arr = _temp.split(" ")[1];
    type = _arr.split("]")[0];
    return type;
};
/**
 * 取出数组中所有值为false的值
 * @param {*} param {}
 * @return {booelan}
 */
export const removeFake = (arr: any[]) => {
    const type = getValueType(arr);
    const fake = [undefined, "undefined", false];
    if (type !== "Array") return arr;
    return arr.reduce((reals, cur) => {
        if (!fake.includes(cur)) {
            reals.push(cur);
        }
        return reals;
    }, []);
};
/**
 * 页面加载时间
 */
export function performance(){
    const timing = window.performance.timing;
    const start = timing.navigationStart;
    return {
        dnsLookup:timing.domainLookupEnd  - timing.domainLookupStart,
        tcp:timing.connectEnd - timing.connectStart,
        requestTime:timing.responseStart - timing.requestStart,
        responeTime:timing.responseEnd - timing.responseStart,
        dom:timing.domComplete - timing.domInteractive,
        startRender:timing.responseStart - start,
        domContentLoad:timing.domContentLoadedEventEnd - start,
        onload:timing.loadEventEnd - start
    };
}
export type Immediate = true|false;
/**
 * 防抖 函数实现
 * 异步函数如何处理
 * @param fn 
 * @param delay 
 * @param immediate 
 * @param context 
 */
export function debounce(fn: any, delay: number, immediate:Immediate= true,context:any){
    // 不是函数 抛出错误
    if(typeof fn !== "function"){
        throw new Error("fn is not function");
    }
    let timer:number;
    // 第一次触发事件是否立即执行
    let _immediate = immediate;
    return function (...args:any[]) {
        // 解决fn 是异步函数的问题
        return new Promise((res,rej)=>{
            try{
                if (_immediate) {
                    const result = fn.apply(this, args);
                    _immediate = false;
                    res(result);
                }
                clearTimeout(timer);
                timer = setTimeout(async () => {
                    const data = await fn.apply(context, args);
                    res(data);
                }, delay);
            }catch(e){
                rej(e);
            }
        });
    };
}

/**
 * 节流 函数实现
 * @param fn 
 * @param wait 
 */
export function throttle(fn:any,wait:number){
    let lastTime = 0;
    return function(...args:any[]){
        let nowTime = new Date().getTime();
        if(nowTime - lastTime > wait){
            fn.apply(this,args);
            lastTime = nowTime;
        }
    };   
}
/**
 * 统一异常处理，返回正确的数据
 */
interface Return<T>{
    msg:string
    data:T,
    code:number
}
export function returnData<T>(resp:Return<T>){
    const {msg,data,code} = resp;
    if(code === 1){
        return data;
    }else{
        throw Error(msg);
    }
}

export function flatItemInArray(data:any[]){
    // return data.reduce((acc,item)=>{
        
    // },[]);
}


/**
 * 重置对象中的属性 ( 暂时支持的层级为 1)
 * @param {*} form 
 * @return {form}
 */
export function clearObj<T extends AnyObject>(form:T):T{
    const obj = Object.create(null);
    const arr = Reflect.ownKeys(form);
    return arr.reduce((acc,item:any)=>{
        let v = form[item];
        let type = getValueType(v);
        if (type === "Array") {
            obj[item] = [];
        } else if (type === "Object") {
            obj[item] = {};
        } else {
            obj[item] = "";
        }
        return acc;
    },{}) as T;
}
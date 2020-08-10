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
// 防抖 函数实现
export type Immediate = true|false;
export function debounce(fn: any, delay: number, immediate:Immediate= true,context:any){
    // 不是函数 抛出错误
    if(typeof fn !== "function"){
        throw new Error("fn is not function");
    }
    let timer:number;
    // 第一次触发事件是否立即执行
    let _immediate = immediate;
    return function (...args:any[]) {
        if (_immediate) {
            fn.apply(this, args);
            _immediate = false;
            return;
        }
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    };
}

// 节流 函数实现
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


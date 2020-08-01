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
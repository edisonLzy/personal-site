/**
 * 获取dom元素到viewport顶部的记录
 */
export  function elToTop(el:HTMLElement):number{
    const {top} = el.getBoundingClientRect();
    return top;
}
/**
 * 设置dom元素的style
 */
export function setStyle<T extends {[index:string]:any}>(el:HTMLElement,style:T){
    const keys = Reflect.ownKeys(style);
    const css = keys.reduce((acc:string,item)=>{
        const k:string = item as string;
        acc += `${k}:${style[k]};`;
        return acc;
    },"");
    el.style.cssText = css;
}
/**
 * 获取dom的某个属性
 */
export function getAttribute(el:HTMLElement,key:string):string{
    let target =  el.getAttribute(key);
    return target?target:"";
}
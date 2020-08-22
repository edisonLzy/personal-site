import {getScrollTop} from "./window";
/**
 * 获取dom元素到viewport顶部的记录
 */
export  function elToTop(el:HTMLElement|Element):number{
    if(!el) return 0;
    const {top} = el.getBoundingClientRect();
    return top;
}
/**
 * 设置dom元素的style
 */
export function setStyle<T extends {[index:string]:any}>(el:HTMLElement,style:T){
    if(el===null) return;
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
/**
 * 获取dom
 */
export function findDom(seletor:string){
    return document.querySelector(seletor);
}
/**
 *  记录当前元素出现的时候滚动滑动的记录
 * @param el 
 * @param offset 当存在导航条的时候 需要减去 offset的值
 */
export function getScrollValueWhenElReac(el:HTMLElement | Element,offset:number){
    if(!el)return 0;
    const v  = (el as HTMLElement).offsetTop;
    return v - offset; 
}
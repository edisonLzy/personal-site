import Vue from "vue";
export const state = Vue.observable({
    // keepAlive维护的数组
    cache:[]
} as {cache:string[]});
export function setCache(value:string){
    if(state.cache.includes(value))return;
    state.cache.push(value);
}
export function deleteCache(value:string){
    state.cache = state.cache.filter(v=>v!==value);
}
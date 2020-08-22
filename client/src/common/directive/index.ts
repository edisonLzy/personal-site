import {addHandler,removeHandler} from "@/utils/window";
import {elToTop,setStyle, getAttribute} from "@/utils/dom";
import {throttle} from "@/utils";

export default {
    install:(_Vue:any)=>{
        autoSticky(_Vue);
    }
};
/**
 * 自动黏住顶部
 */
function autoSticky(Vue:any){
    const offset = 10;
    let status = "pending";
    let dom:any = null;//缓存dom
    const handler = throttle(function(value:number){
        if(status === "success")return;
        const toTop = elToTop(dom);
        const target  = offset+value;
        if(toTop <= target){
            setStyle(dom,{
                position:"sticky",
                top:`${target}px`
            });
            status = "success";
        }
    },300);
    Vue.directive("autoSticky",{
        bind:function(el:HTMLElement,binding:any){
            const {value} = binding;
            dom = el;
            addHandler(window,"scroll",handler.bind(null,value));
        },
        unbind:function(){
            status = "pending";
            dom = null;
            removeHandler(window,"scroll",handler);
        }
    });
}
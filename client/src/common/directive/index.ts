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
    const handler = throttle(function(value:number,el:HTMLElement){
        const toTop = elToTop(el);
        const target  = offset+value;
        // const hasSet = !!getAttribute(el,"style");
        if(toTop <= target){
            // if(hasSet){
            //     setStyle(el,{});
            // }else{
            setStyle(el,{
                position:"sticky",
                top:`${target}px`
            });
            // }
        }
    },300);
    Vue.directive("autoSticky",{
        bind:function(el:HTMLElement,binding:any,vnode:any){
            const {value} = binding;
            addHandler(window,"scroll",handler.bind(null,value,el));
        },
        unbind:function(el:HTMLElement,binding:any,vnode:any){
            removeHandler(window,"scroll",handler);
        }
    });
}
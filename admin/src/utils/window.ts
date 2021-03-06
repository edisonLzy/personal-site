// 禁止滚动条
export const scroll = {
    root: document.documentElement,
    widthBar: 17,
    hidden() {
        // 判断是否是window系统
        if (typeof window.innerWidth === "number") {
            this.widthBar = window.innerWidth - this.root.clientWidth;
        }
        this.root.style.overflow = "hidden";
        this.root.style.borderRight = this.widthBar + "px solid transparent";
    },
    show() {
        this.root.style.overflow = "";
        this.root.style.borderRight = "";
    }
};
// 是否触地
export function ReachBottom(dis = 10) {
    const sT = getScrollTop();
    // 整个页面的高度 document.body = body
    const cH = document.body.clientHeight-dis;
    // 视口的宽度 document.documentElement = html
    const sH = document.documentElement.clientHeight;
    return sT + sH >= cH;
}
// 获取滚动条的高度
export function getScrollTop():number {
    if (document.documentElement.scrollTop) {
        getScrollTop = () => document.documentElement.scrollTop;
    } else if (document.body.scrollTop) {
        getScrollTop = () => document.body.scrollTop;
    } else {
        getScrollTop = () => window.pageYOffset;
    }
    return getScrollTop();
}
// 平滑滚动到顶部 
export function scrollToTop() {
    const c = getScrollTop();
    if (c > 0) {
        //html5 提供一个专门用于请求动画的API，那就是 requestAnimationFrame，顾名思义就是请求动画帧。
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
}
// 平滑到指定滚动位置
export function scrollToTarget(target:number){

    window.scrollTo({ 
        top: target, 
        behavior: "smooth" 
    });

    // const c = getScrollTop();
    // console.log(c);
    // if (c > target) {
    // //html5 提供一个专门用于请求动画的API，那就是 requestAnimationFrame，顾名思义就是请求动画帧。
    //     window.requestAnimationFrame(scrollToTarget.bind(null,target));
    //     window.scrollTo(0, target - 8);
    // }

}
// 添加事件监听
export function addHandler(target: any, eventType: string, handler: any) {
    if (target.addEventListener) {
        addHandler = function (target: any, eventType: string, handler: any) {
            target.addEventListener(eventType, handler, false);
        };
    } else {
        addHandler = function (target: any, eventType: string, handler: any) {
            target.addachEvent("on" + eventType, handler);
        };
    }
    addHandler(target, eventType, handler);
}
// 移除事件监听
export function removeHandler(target: any, eventType: string, handler: any) {
    if (target.addEventListener) {
        removeHandler = function (target: any, eventType: string, handler: any) {
            target.removeEventListener(eventType, handler, false);
        };
    } else {
        removeHandler = function (target: any, eventType: string, handler: any) {
            target.detachEvent("on" + eventType, handler);
        };
    }
    removeHandler(target, eventType, handler);
}
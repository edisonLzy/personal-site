// import Loading from "@/components/l-loading/src/main.vue";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export const Spin: {
    option: any,
    i:{close:()=>void},
    start: () => void,
    close: () => void
} = {
    option: { text: "loading" },
    i:{close:()=>{}},
    start() {
        NProgress.start();
    },
    close() {
        NProgress.done();
        // if (this.i instanceof ElLoadingComponent) {
        // this.i.close();
        // }
    }
};
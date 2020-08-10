import { Component, Vue } from "vue-property-decorator";
import {addHandler,removeHandler,ReachBottom} from "@/utils/window";
import {debounce} from "@/utils/index";
@Component({
    name: "ReachBottom"
})
export default class extends Vue {
    onBottom(){

    }
    onScroll(){
        const isBottom = ReachBottom();
        isBottom&&this.onBottom();
    }
    mounted() {
        const fn = debounce(this.onScroll.bind(this),100,true,this);
        addHandler(window,"scroll",fn);
        this.$once("hook:destroyed",()=>{
            removeHandler(window,"scroll",fn);
        });   
    }
}

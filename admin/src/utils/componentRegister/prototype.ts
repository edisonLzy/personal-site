// 将组建 挂载到 原型
import { ProtoRegister } from "@/types/compoentRegister";
// 通过extend的方式挂载组件
let Vue: any;
class Mount {
    $cst: any;
    $index: number;
    $options: ProtoRegister;
    $instance:any;
    constructor(options: any) {
        this.$options = options;
        this.$index = this.$options.mountOptions.index || 2000;
        if (typeof this.$options.component !== "function") {
            throw new Error("VueCst is not a vue instance!");
        }
        this.init();
        this.install();
    }
    init() {
        // 通过vue组件实例创建构造器
        this.$cst = Vue.extend(this.$options.component);
    }
    install() {
        // 将组件手动挂载到Vue的原型上面 
        Object.defineProperty(Vue.prototype, this.$options.mountOptions.name, {
            get: () => {
                const fn = (fnOptions: any) => {
                    const options = Object.assign({}, fnOptions);
                    if(this.$instance){
                        return this.$instance.vm;
                    }
                    this.$instance = new this.$cst(options);
                    //note:手动执行了一次 $mount
                    this.$instance.vm = this.$instance.$mount();
                    document.body.appendChild(this.$instance.$el);
                    this.$instance.vm.$el.style.zIndex = this.$index;
                    return this.$instance.vm;
                };
                return fn;
            }
        });
    }
}
export default function (allOptions: ProtoRegister) {
    return {
        install: (_Vue: Vue) => {
            // 缓存Vue实例
            Vue = _Vue;
            new Mount(allOptions);
           
        }
    };

}
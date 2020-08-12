import Element from '@/init/Element';
import ComponentRegister from "@/components";
export default {
    install: (Vue: any) => {
        Element(Vue)
        Vue.use(ComponentRegister);
    }
}
import { NormalRegister } from "@/types/compoentRegister";
export default function (Cst: NormalRegister) {
    return {
        install: (Vue: any) => {
            Vue.component(Cst.componentname || Cst.name, Cst);
        }
    };
}
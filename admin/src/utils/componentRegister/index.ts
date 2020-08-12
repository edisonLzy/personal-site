import normal from "./normal";
import prototype from "./prototype";
import { MounteWay } from "@/types/compoentRegister";
export default function (type: MounteWay, options: any) {
    const instance = options;
    // 判断 options 是不是　组件构造器
    switch (type) {
    case "normal":
        return normal(instance);
    case "prototype":
        return prototype(instance);

    }
}
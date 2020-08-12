// 组件自动注册 
import { removeFake } from "@/utils";
// 组件注册
const context = require.context("./", true, /\.tsx?$/);
let components: any[] = [];
context.keys().forEach((item, index) => {
    // 过滤掉本目录的index.ts
    if (item === "./index.ts") {
        return;
    } else {
        const comp = context(item).default;
        components.push(comp);
        components = removeFake(components);
    }
});
// export
const register = {
    install: (Vue: any) => {
        components.forEach((item) => {
            Vue.use(item);
        });
    },
};
export default register;

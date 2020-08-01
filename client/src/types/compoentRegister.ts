export interface ProtoRegister{
    component: any;
    mountOptions: {
        index?: number;
        name: string;
    };
}
// 普通 注册组件
export interface NormalRegister extends Vue{
    componentname: string;
    name?: string;
}
export type MounteWay = "normal"|"prototype";
import Com from "./src/main.vue";
import comRegister from  "@/utils/componentRegister";
const options= {
    component:Com,
    mountOptions:{
        name:"$Loading",
        index:2000
    }
};
export default comRegister("prototype",options);
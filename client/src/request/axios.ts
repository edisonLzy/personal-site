import axios, { AxiosRequestConfig } from "axios";
import Storage from "@/utils/localStorage";
const isDev = process.env.NODE_ENV ==="development" ;
const baseConfig:AxiosRequestConfig = {
    timeout: 50000,// 请求超时时间
    // transformResponse: [function (data) {
    //     // 对 data 进行任意转换处理
    //     return JSON.parse(data);
    // }]
};
if(!isDev){
    baseConfig.baseURL ="http://localhost:3000";
}
// if(process.env.NODE_ENV){}
// 缓存一些基本的配置
function RequestFactory(base: AxiosRequestConfig) {
    return (options: AxiosRequestConfig = {}) => {
        const config = { ...base, ...options };
        return axios.create(config);
    };
}

const creator = RequestFactory(baseConfig);
const Api = creator();
// 请求拦截
Api.interceptors.request.use(config => {
    const token = Storage.get("token");
    if (token) {
        config.headers.authorization = "bearer " + token;
    }
    return config;
},
error => {
    return Promise.reject(error);
});
// 响应拦截
Api.interceptors.response.use(resp => {
    // 处理token
    if (resp.headers.authorization) {
        Storage.set("token", resp.headers.authorization);
    }
    return resp.data;
}, error => {
    // 响应的时候，如果响应的消息码是403（没有token，token失效），在本地删除token
    if (error.response.status === 403) {
        Storage.delete("token");
    }
    return Promise.reject(error);
});
export default Api;
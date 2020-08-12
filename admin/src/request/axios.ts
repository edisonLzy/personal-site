import axios, { AxiosRequestConfig } from 'axios';
const baseConfig = {
    withCredentials: true,
    timeout: 50000// 请求超时时间
};

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
    return config;
},
    error => {
        return Promise.reject(error)
 })
// 响应拦截
Api.interceptors.response.use(response=>{

  return response
},error=>{
    return Promise.reject(error.response)
})
export default Api;
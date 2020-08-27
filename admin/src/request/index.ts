import { AxiosRequestConfig } from 'axios';
import { Spin } from '@/utils/loading';
import Api from './axios';
interface Config extends AxiosRequestConfig{
    loading?:boolean;
}
type noData = (url: string,data?:any,config?: Config) => Promise<any>;
type withData =  (url: string,data?:any,config?: Config) => Promise<any>;

interface Request {
    get:noData,
    head:noData,
    delete:noData,
    put:withData,
    post:withData,
    patch:withData
}
const methods = ['get', 'post', 'patch', 'put', 'delete', 'head'];
export const request:Request = methods.reduce((acc: any, cur) => {
    acc[cur] = function (url: string, data: any = {}, config: Config) {
        const withLoading = !!config.loading;
        return new Promise(async (reo) => {
            withLoading && Spin.start()
            const result = await (<any>Api)[cur](url, data, config).catch((err:string)=>{
                withLoading && Spin.close()
                reo(err)
            });
            withLoading && Spin.close()
            reo(result)
        })
    }
    return acc;
}, {})


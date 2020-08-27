import {request} from '@/request';
import {returnData} from "@/utils/index";

export async function getSign(form:any){
  const {data,code,msg} = await request.post('v1/api/user/sign',form,{
      loading:true
    });
    return returnData({code,msg,data});
}

export async function getLogin(form:any){
  const {data:{data,code,msg}} =  await request.post('v1/api/user/login',form,{
    loading:true
  });
  return returnData({data,code,msg});
}
export async function getWhoami(){
  return await request.get('v1/api/user/whoami',undefined,{
    loading:true
  });
}

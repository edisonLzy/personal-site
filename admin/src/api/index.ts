import {request} from '@/request';

export async function getSign(form:any){
    return await request.post('v1/api/user/sign',form,{
      loading:true
    });
}

export async function getLogin(form:any){
  return await request.post('v1/api/user/login',form,{
    loading:true
  });
}
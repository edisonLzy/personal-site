import {request} from '../../request';


export async function setLoginApi(form:any){
	const {data} =  await request.post('v1/api/user/login',form,{
		loading:true
	});
	return data;
}

  
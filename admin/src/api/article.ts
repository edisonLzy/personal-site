import {request} from '@/request';

export async function addArticle(form:any){
    return await request.post('v1/api/article/add',form,{
      loading:true
    });
}
export async function getArticleList(form:any){
  return await request.get('v1/api/article',form,{
    loading:true
  });
}


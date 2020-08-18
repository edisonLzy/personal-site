import {request} from "@/request";
import {returnData} from "@/utils/index";
export interface ArticleComment{
    level:number
    comment_content:string
    comment_likes:string
    fromNow:string
    [index:string]:any
}
export interface ArticleCommentVal{
    article_id:string|number
    comment_name:string
    comment_content:string
    comment_email?:string
}
export interface ArticleDetail {
    article_html:string
    article_likes:string
    article_title:string
    article_type:string
    article_views:string
    [index:string]:any
}
/**
 * 获取详情
 * @param id 
 */
export async function getDetail(id:string){
    const {code,msg,data} = await request.get(`v1/api/article/detail/${id}`,undefined,{
        loading:true
    });
    return returnData({code,msg,data:<ArticleDetail>data});
}

/** 
 * 设置评论
 * @param form 
 */
export async function setComment(form:ArticleCommentVal){
    const {code,msg,data} = await request.post("v1/api/comment/add",form,{
        loading:true
    });
    return returnData({code,msg,data:<ArticleCommentVal>data});
}
/**
 * 获取评论
 */
export async function getComment(article_id:number|string){
    const {code,msg,data} = await request.get("v1/api/comment",{article_id},{
        loading:true
    });
    
    return returnData({code,msg,data:<ArticleComment[]>data.data});
}
/**
 * 点赞
 */
export async function setLike(article_id:number|string){
    const {code,msg,data} = await request.put("v1/api/article/like",{id:article_id},{
        loading:true
    }); 
    return returnData({code,msg,data:<string>data}); 
}
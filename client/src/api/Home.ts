import {request} from "@/request";
import {returnData} from "@/utils/index";
import {ArticleComment} from "./Detail";
export interface ArticleListItem{
    article_cover:string
    article_desc:string
    article_title:string
    article_type:string
    article_views:string
    time:string
    user_name:string
    id:number
}
// 获取最新评论
export async function getLastestComment(){
    const {data,code,msg} = await request.get("v1/api/comment",{
        limit:4,
        date:"desc"
    },{
        loading:true
    });
    return returnData({code,msg,data:<ArticleComment[]>data.data});
}
// 特别推荐
export async function getRecommand() {
    const {data,code,msg} = await request.get("v1/api/article",{
        limit:4,
        views:"desc"
    },{
        loading:true
    });
    const res = data.records.map((item:any)=>{
        item.user_author = item.user.user_name;
        return item;
    });
    
    return returnData({code,msg,data:<ArticleListItem[]>res});
}
// 最新发布
export async function getPublish() {
    const {code,msg,data} = await request.get("v1/api/article",{
        limit:4,
        date:"desc"
    },{
        loading:true
    });
    const res = data.records.map((item:any)=>{
        item.user_author = item.user.user_name;
        return item;
    });
    return returnData({code,msg,data:<ArticleListItem[]>res});
}
// 获取标签 
export async function getTag() {
    return [
        {
            label: "Javascript",
            value: "Javascript"
        },
        {
            label: "HTML5",
            value: "HTML5"
        },
        {
            label: "CSS3",
            value: "CSS3"
        },
        {
            label: "Vue",
            value: "Vue"
        },
        {
            label: "React",
            value: "React"
        },
        {
            label: "WEBGL",
            value: "WEBGL"
        },
        {
            label: "Wechat",
            value: "Wechat"
        }
    ];
}



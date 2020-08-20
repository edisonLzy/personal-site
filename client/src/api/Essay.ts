import {request} from "@/request";
import {returnData} from "@/utils/index";
import {ArticleListItem} from "./Home";
export async function getAllList(type:string="",title:string = "",limit = 10){
    const {data,code,msg} = await request.get("v1/api/article",{
        views:"desc",
        type,
        title,
        limit
    },{
        loading:true
    });
    return returnData({code,msg,data:<ArticleListItem[]>data.records});
}
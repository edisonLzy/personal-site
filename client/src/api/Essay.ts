import {request} from "@/request";
import {returnData} from "@/utils/index";
import {ArticleListItem} from "./Home";
export async function getAllList(type:string){
    const {data,code,msg} = await request.get("v1/api/article",{
        views:"desc",
        type
    },{
        loading:true
    });
    return returnData({code,msg,data:<ArticleListItem[]>data.records});
}
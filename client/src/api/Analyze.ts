import {request} from "@/request";
import {returnData} from "@/utils/index";
interface Analyze {
  views:number
  likes:number
  count:number
  list:{
      type:string
      views:number
      likes:number
      count:number
  }[]
}
export async function getAnalyze(){
    const {data,code,msg} = await request.get("v1/api/article/analyze",undefined,{
        loading:true
    });
    return returnData({code,msg,data:<Analyze>data});
}
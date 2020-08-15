import {request} from "@/request";
// 特别推荐
export async function getRecommand() {
    return await request.get("v1/api/article",{
        limit:4
    },{
        loading:true
    });
}
// 最新发布
export async function getPublish() {

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



const echarts = require("echarts");
const map:{[index:string]:(data:any)=>void} = {
    createPieChart
};
function createPieChart(data:any){
    const legendArr = Object.keys(data);
    const seriesArr = legendArr.map(v=>({
        name:v,
        value:data[v]
    }));
    return {
        title: {
            text: "页面加载时间",
            left: "center",
            show:false    
        },
        legend: {
            data:legendArr,
            bottom:0
        },
        series: [{
            name: "timing",
            type: "pie",
            roseType:true,
            data: seriesArr,
        }]
        
    };
}

export function useEcharts(root:Element,options:any){
    const i = echarts.init(root);
    return i;
}
export function echartFactory(type:string,data:any){
    return map[`create${type}Chart`](data);
}


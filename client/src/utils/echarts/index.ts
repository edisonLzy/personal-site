const echarts = require("echarts");
interface OP {
    // title:string
    // legend:any
    // data:any
    [index:string]:any
}
const map:{[index:string]:(...data:any[])=>void} = {
    createPieChart,
    createBarChart
};
function createPieChart(options:OP){
    const legendData = Object.keys(options.data);
    const seriesData = legendData.map(item=>{
        return {
            name:item,
            value:options.data[item]
        };
    });
    console.log(seriesData);
    return{
        title: options.title,
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: "vertical",
            left: "left",
            data: legendData
        },
        series: [
            {
                name: options.title.text,
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data:seriesData,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: "rgba(0, 0, 0, 0.5)"
                    }
                }
            }
        ]
    };
}

function createBarChart(options:OP){
    return {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "cross",
                crossStyle: {
                    color: "#999"
                }
            }
        },
        toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ["line", "bar"]},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        title: options.title,
        legend: options.legend,
        xAxis: options.xAxis,
        yAxis: {}
        ,
        series:options.series
    };
}

export function useEcharts(root:Element){
    const i = echarts.init(root);
    return i;
}
export function echartFactory(type:string,op:OP){
    return map[`create${type}Chart`](op);
}
/**
 * 返回 {name,type,data}[] 
 * @param legend 
 * @param data 
 */
interface Series{
    name:string
    type:string
    data:any[]
}
export function normalSeries(legend:string[],data:any[]):Series[]{
    return legend.map(type=>{
        // 获取 data中为当前 type 的数据
        const curData = data.map(item=>item[type]);
        return {
            name:type,
            type:"bar",
            data:curData
        };
    });
}


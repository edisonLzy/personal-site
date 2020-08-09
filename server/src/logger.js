// 日志记录配置 
const log4js = require("log4js");
const path = require("path");

log4js.configure({
  appenders: {
    sql: {
      //定义一个sql日志出口
      type: "dateFile",// 日志输出的形式 这里表示用文件输出
      filename: path.resolve(__dirname, "logs", "sql", "logging.log"),
      maxLogSize: 1024 * 1024, //配置文件的最大字节数 1m
      keepFileExt: true,//是否保留 日志文件 后缀 
      layout: {
        // 配置日志输出的格式
        type: "pattern",
        pattern: "%c [%d{yyyy-MM-dd hh:mm:ss}] [%p]: %m%n",
      },
    },
    api:{
      type: "dateFile",// 日志输出的形式 这里表示用文件输出
      filename: path.resolve(__dirname, "logs", "api", "logging.log"),
      maxLogSize: 1024 * 1024, //配置文件的最大字节数 1m
      keepFileExt: true,//是否保留 日志文件 后缀 
    },
    default: {
      type: "stdout",// 这里表示该日志在控制台输出
    },
  },
  categories: {
    sql: {
      appenders: ["sql"], //该分类使用出口sql的配置写入日志
      level: "all",
    },
    api:{
        appenders: ["api"], //该分类输出 api请求的日志
        level: "all",
    },
    default: {
      appenders: ["default"],
      level: "all",
    },
  },
});

process.on("exit", () => {
  log4js.shutdown();
});

const sqlLogger = log4js.getLogger("sql");
const apiLogger = log4js.getLogger("api");
const defaultLogger = log4js.getLogger();

exports.sqlLogger = sqlLogger;
exports.apiLogger= apiLogger;
exports.logger = defaultLogger;

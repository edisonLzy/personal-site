const path = require("path");
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg|otf|ttf|woff|eot|png)(\?.*)?$/i;
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const SimpleProgressWebpackPlugin = require("simple-progress-webpack-plugin");

function resolve(src) {
    return path.resolve(__dirname, src);
}
module.exports = {
    lintOnSave: true,
    publicPath: "./",
    outputDir:"../dist/public",
    css: {
        sourceMap: true,
        loaderOptions: {
            scss:
            {
                prependData:
                    `
                @import "@/assets/scss/common.scss";
                @import "@/assets/scss/_var.scss";
                @import "@/assets/scss/_mixin.scss";
                `
            }
        }
    },
    pluginOptions: {
        html: {
            title:"博客|leezhiyu"
        }
    },
    pwa: {
        iconPaths: {
            favicon32: "./icon.png",
            favicon16: "./icon.png",
            appleTouchIcon: "./icon.png",
            maskIcon: "./icon.png",
            msTileImage: "./icon.png"
        }
    }, 
    // webpack 链式配置
    chainWebpack: config => {

        config.resolve.extensions
            .prepend(".ts")
            .prepend(".tsx")
            .add(".jpg")
            .add(".png")
            .add(".svg");

        config.module
            .rule("svgIcon")
            .test(/\.svg$/)
            .include.add(resolve("src/assets/icon"))
            .end()
            .use("svg-sprite-loader")
            .loader("svg-sprite-loader")
            .tap(options => {
                options = {
                    symbolId: "icon-[name]"
                };
                return options;
            });
        // 新增externals
        config.externals({
            echarts:"echarts"
        });

        // 原有的svg图像处理loader添加exclude
        config.module
            .rule("svg")
            .exclude.add(resolve("src/assets/icon"))
            .end();

        config.when(process.env.NODE_ENV === "production",
            /* -- 生产环境 配置 --  */
            config => {
                // optimization terser
                config.optimization
                    .minimizer("terser")
                    .tap(args => {
                        const { terserOptions: { compress } } = args[0];
                        compress.pure_funcs = ["console.log"];
                        return args;
                    })
                    .end();
                // progress
                config.plugin("progress")
                    .use(SimpleProgressWebpackPlugin);
                // gzip
                config.plugin("gzip")
                    .use(CompressionWebpackPlugin, [{
                        filename: "[path].gz[query]",
                        algorithm: "gzip",
                        test: productionGzipExtensions,
                        threshold: 2048,
                        minRatio: 0.8
                    }]);
            }
        );
    },
};
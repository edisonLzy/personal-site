module.exports = {
    devServer: {
        proxy: {
            'v1/api/': {
                target: 'http://localhost:3000'
            },
        }
    },
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
}
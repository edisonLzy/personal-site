// LIcon组件 图标注册插件
export default {
    install: () => {
        const req = require.context("../../assets/icon", false, /\.svg$/);
        const requireAll = (requireContext: any) => {
            return requireContext.keys().map(requireContext);
        };
        requireAll(req);
    }
};
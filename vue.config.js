module.exports = {
    runtimeCompiler: true,
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/style/root/varables.scss";@import "@/style/root/animate.scss";`,
            }
        }
    },
}
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  /**根目录 */
 publicPath:'./',
 /**默认关闭生产环境的资源 */
 productionSourceMap:false,
 /**打包时候的文件夹名称 */
 outputDir:'dist',
 /**放置打包时静态资源文件生成的存放位置js csS img */
 assetsDir:'assets',
 /**本地的环境代理配置 */
 devServer:{
  /**端口号 */
  port:'9999',
  /** 开发运行时域名，设置成'0.0.0.0,在同一个局域网下，如果你的项!*/
  host:'localhost',
  open:true,
  https:false,
  // proxy:{
  //   './api':{
  //     changeOrigin:true,
  //     secure:false,
  //     target:'url',
  //     pathRewrite:{
  //       '^/api':''
  //     }
  //   }
  // }
 }
});

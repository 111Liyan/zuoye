# vue3
# vite为什么是下一代的新型构建工具
一个开发服务器，它基于原生ES模块 提供了丰富的内建功能，速度快模块热更新（HMR）。
一套构建指令，它使用Rollup打包代码，并且它是预配置的，可输出用于生产环境的高度优化过的静态资源.
Vite 提供了一套原生ESM的HMR API。 具有HMR功能的框架可以利用该API提供即时、准确的更新，而无需重新加载页面或清除应用程序状态。Vite 内置了HMR到Vue.js单文件组件（SFC）和React Fast Refresh 中。
# vite 和webpack区别在哪里

webpack是一个JavaScript应用程序的静态模块打包工具，它会对整个应用程序进行依赖关系图构建。
vite是构建工具的高阶封装，使用简单，快（开发的时候感觉没有编译过程），便于扩展。而他集成的esbuild(Go 编写) 预构建依赖，比node快 10-100 倍。
和webpack的区别：

1）关注层级不同
vite关注的层级更高：vite是 high level api，关注的是如何快速方便的搭建项目，相比webpack，减少了很多配置量。

webpack关注的层级更低：webpack是low level api，因为webpack更关注的是各种功能的实现，重点放在构建上。

2）vite自己不包含编译能力。
它本身并不参与编译，它的编译能力只是集成了rollup和ESbuild的功能.

3）启动项目vite更快，可以说是超级快。
对比webpack在dev-serve的时候，会提交所有编译的文件，而vite在dev-serve的时候利用了浏览器的native ES module功能，在浏览器请求对应的url时才提供文件，实现了根据路由的懒加载，所以启动的时候是超快的。

4）vite的热更新更快。
对比webpack的热更新，热更新时，把改动过模块的相关依赖模块全部编译一次。而vite热更新时，仅让浏览器重新请求改动过的模块。

现在公司项目从webpack过渡到vite,还在不断摸索爬坑中，虽然目前vite的生态不如webpack丰富，且实用的开发者也不及webpack。
但是不可否认的是，相比于webpack, vite非常适合项目的开发，webpack适合工具的开发。

# vue3的优势在哪里
1. 响应系统的变动
   由原来的 Object.defineProperty 的 getter 和 setter，改变成为了 ES6 Proxy 作为其观察机制。
   Proxy 的优势：速度加倍，节省了⼀半的内存开销。
2. 虚拟 DOM 重写（Virtual DOM Rewrite）
   用更有效的代码来创建虚拟节点。
3. 组件渲染的优化（优化插槽⽣成）
   Vue2 当中在⽗组件渲染同时，⼦组件也会渲染。 Vue3 就可以单独渲染⽗组件、⼦组件。

总体来说：1. 更快 2. 更⼩ 3. 更容易维护 4. 更加友好 5. 更容易使⽤
# vue2的优势在哪里
1.简单易学：Vue是由国人开发的
2.Vue是轻量级框架，只关注视图层，是一个构建数据的视图集合，大小只有几十kb
3.双向数据绑定：保留了angular的特点，在数据操作方面更为简单；
4.组件化：数据保留react的优点，实现了html的封装和重用，在构建单页面应用方面有着独特的优势；
5.视图，数据，结构分离，这使得数据变得更为简单，不需要进行逻辑代码修改，只需要操作数据就可以完成相关操作
6.虚拟DOM：dom操作是一个非常消耗性能的操作，不再使用原生的dom操作节点，极大的解放了dom操作，但具体的操作还是dom不过是换了另一个方式
7.运行速度更快:相比较react而言，操作虚拟dom，在性能上vue存在很大的优势

# vue2和vue3的区别
1. 双向数据绑定原理发生了改变，使用 proxy 替换 Object.defineProperty,使用 Proxy 的优势：
    可直接监听数组类型的数据变化
    监听的目标为对象本身，不需要像 Object.defineProperty 一样遍历每个属性，有一定的性能提升
    可直接实现对象属性的新增/删除
2. 默认使用懒加载
   在 2.x 版本里。不管数据多大，都会在一开始就为其创建观察者，在数据很大时，就会造成性能的问题。在 3.x 中，只会对渲染出来的数据创建观察者，而且 3.x 的观察者更高效。
3. 3.0 新加入了 TypeScript 以及 PWA 支持
4. 重构 Virtual DOM
    模板编译时的优化，将一些静态节点编译成常量
   Slot 优化，将 slot 编译为 lazy 函数，将 slot 的渲染的决定权交给子组织
5. 生命周期有了一定的区别
   Vue2--------------vue3
   beforeCreate -> setup() 开始创建组件之前，创建的是 data 和 method
   created -> setup()
   beforeMount -> onBeforeMount 组件挂载到节点上之前执行的函数。
   mounted -> onMounted 组件挂载完成后执行的函数
   beforeUpdate -> onBeforeUpdate 组件更新之前执行的函数。
   updated -> onUpdated 组件更新完成之后执行的函数。
   beforeDestroy -> onBeforeUnmount 组件挂载到节点上之前执行的函数。
   destroyed -> onUnmounted 组件卸载之前执行的函数。
   activated -> onActivated 组件卸载完成后执行的函数
   deactivated -> onDeactivated
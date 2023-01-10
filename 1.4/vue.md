一.vue 常⽤的指令
1.v-show   通过添加或移除display:none进行显隐藏控制
2.v-if    控制dom元素,没有v-else的时候,会在移除dom元素的时候留一个标识,方便下次再次进行显示的时候,首先查看,减少整个DOM循环
3.v-for   可循环数字，数组，对象，字符串，key为唯一的标识
4.v-html   可以渲染标签
5.v-bind  动态传参
6.v-model   双向数据绑定
7.v-cloak   网速慢的时候阻止页面白屏
8.v-pre  跳过其他节点编译,让使用没有插值语法的加快编译
9.v-text  直接渲染文本
10.v-on
二.自定义指令
配置在directive选项中,有两种方法
1.组件内自定义指令
 fbind:{
					//指令与元素成功绑定时（一上来）
					bind(element,binding){
                        console.log("bind");
						element.value = binding.value
					},
					//指令所在元素被插入页面时---- DOM加载过程中让他实现聚焦
					inserted(element,binding){
                        // console.log('inserted');
						 element.focus()
					},
					//指令所在的模板被重新解析时
                    updata(element,binding){
                        console.log('updata')
                        element.value=bining.value
                    }
                    


全局
//定义全局指令
		 Vue.directive('fbind',{
			//指令与元素成功绑定时（一上来）
			bind(element,binding){
				element.value = binding.value
			},
			//指令所在元素被插入页面时
			inserted(element,binding){
				element.focus()
			},
			//指令所在的模板被重新解析时
			update(element,binding){
				element.value = binding.value
                }
                })

三.v-if 与 v-show 的区别
v-if：动态创建或移除元素，实现元素的显示与隐藏
v-show：动态为元素添加和移除 display: none 样式，实现元素的显示与隐藏
性能区别：
如果要频繁的显示和隐藏，v-show的性能更好，因为动态创建和移除元素浏览器会出现重绘等机制，所以会消耗更多的性能。
如果刚进入页面的时候，某些元素默认不需要被展示，而且后期这个元素很可能也不需要被展示出来，此时v-if性能更好。

四. vue生命周期
1.beforeCreate 在实例初始化之后，数据观测(data observer) 之前被调用。
2.created 实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算，watch/event 事件回调。这里没有$el
3.beforeMount 在挂载开始之前被调用：相关的 render 函数首次被调用。
4.mounted el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
5.beforeUpdate 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
6.updated 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
7.beforeDestroy 实例销毁之前调用。在这一步，实例仍然完全可用。
8.destroyed Vue 实例销毁后调用。调用后， Vue实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 该钩子在服务器端渲染期间不被调用
⽗⼦组件⽣命周期执⾏的顺序
父组件 beforeCreate
父组件 created
父组件 beforeMount
子组件 beforeCreate
子组件 created
子组件 beforeMount
子组件 mounted
父组件 mounted

五.keep-alive
当组件进行切换的时候，一般默认会把页面进行销毁，而keep-alive是vue的一个内置组件，作用就是保存组件的状态，让他不被销毁，
组件使用keep-alive之后会新增两个生命周期activated，和deactivated，activated是激活，deactivated是失活。
当遇到有些组件不需要缓存时，这个时候就可以用到keep-alive标签的两个属性，include属性和exclude属性 ：
include（白名单）属性定义了要缓存谁，exclude（黑名单）属性定义了不缓存谁，要想黑白名单生效，可以通过name来让属性生效

六.v-for 与 v-if 的优先级
v-for 的优先级⾼. 因为 v-for 的时候我们才开始渲染 dom 元素,这个 v-if 还⽆法进⾏判断
v-for 和 v-if 不能同时使⽤,我们可以通过标签,⽐如 div 或者 template 标签来进⾏包裹,把 v-if 写到包裹的标签上⾯(写到 v-for 外⾯)
七.vue 中 key 的作⽤
避免 dom 元素重复渲染.
 我⻔⼀般在设置 key 的时候⾸先尽量会设置为 id,或者 index 下表.
 key是唯一的
 八.vue双向数据绑定原理

 1、vue双向数据绑定是 通过 数据劫持 并结合 发布-订阅模式 的方法来实现的。 也就是说数据和视图同步，数据发生变化，视图跟着变化，视图变化，数据也随之发生改变。
2、其中 数据劫持 是通过 Object.defineProperty() 方法实现的。vue 在内部会把定义在 data 中的属性通过这个方法全部转为 getter/setter。
3、在数据变动时发布消息给订阅者，触发相应的监听回调。这个时候就可以实现数据的双向绑定

 九..路由的导航守卫

有三种 共7 个
全局
beforeEach 前置守卫
beforeResolve 路由解析守卫
afterEach 后置守卫

组件级守卫
beforeRouteEnter 路由进入之前
beforeRouteUpdate 路由更新之前
beforeRouteLeave 路由离开之前

单个路由独享守卫
beforEnter 路由进入之前

十.组件传值的八种方式

 1父传子

 首先在使用子组件的标签上 通过自定义属性传递变量 在子组件中 通过 props 接受
  在接收的时候有两种接收方式 数组形式 和 对象形式 对象形式可以规定传来的变量的数据类型（type）默认值（default）以及是否必填（required）

 2. 子传父

首先在使用子组件的标签上定义一个自定义事件 在子组件里通过 this.$emit 去调用这个自定义事件 $emit 方法的第一个参数是自定义事件的名字 第二个参数是就是子组件要传递给父组件的变量 最后在父组件接收使用就可以了

3. 兄弟组件

 利用中央事件总线 eventbus
  在 main.js 中 把一个空的 vue 实例挂载在 vue 的原型上起名叫$bus
  传数据的时候用this.$bus.$emit传 
  在要接受数据的子组件 在 created钩子函数中 用$on 方法接收

4. 利用 vuex 进行组件通信 把公共的数据存在 vuex 里就可以实现组件之间都能使用这个数据了

5. 其实 v-model 也能实现组件通信 因为 v-model 就是 :value 和 @input 事件的合写 如果在一个子组件上使用 v-model 也能实现父子组件之间的通信

6. $attr+$listener
   如果父组件 A 下面有子组件 B 子组件 B 下面又有子组件 C 如果 a 组件的变量和方法想要传给组件 C 的时候 就用到这个方法 适用于多级组件传值
   在 B 组件中给 C 组件绑定 v-bind="$attrs" v-on="$listeners" 然后在 C 组件中就可以直接使用 a 传来的属性和方法了
   （简单来说：$attrs与$listeners 是两个对象，$attrs 里存放的是父组件中绑定的非 Props 属性，$listeners 里存放的是父组件中绑定的非原生事件。）

7. provide 和 inject
   父组件通过通过 provide 提供变量 子组件中通过 inject 注入变量，不论嵌套了几层子组件 都能通过 inject 来调用 provide 的数据

这种写法传的数据是不响应的
6 和 7 都是用来祖孙传值的

8. $parent和$children
   在子组件内可以直接通过$parent对父组件进行操作，在父组件内可以直接通过$children 对子组件进行操作
   在父组件调用子组件时候要加下标也就是$children 是一个数组 因为可以有很多个子组件

9. 也能用本地存储 来 完成组件通信
十一.跨域

 产生的原因
   因为浏览器的同源策略的原因，一旦域名，ip,端口，协议，任何一个不同就好产生跨域的问题
 解决跨域的方式
   CORS
   window.domain
   location.href
   proxy(本地)
   jsop
     限制
       需要服务的支持
       只能发起GET请求
   Script src解决跨域 img src
   nginx(线上代理的方式解决跨域)

  十二. data为什么是一个函数


   因为组件是可复用的vue实例，一个组件被创建好之后，就可能被用在各个地方。组件不管被复用了多少次，组件中的data数据都应该是相互隔离，互不影响的。基于这一理念，组件每复用一次，data数据就应该被复制一次，之后，当某一处复用的地方组件内data数据被改变时，其他复用地方组件的data数据不受影响
   如果组件中的data写成一个函数，数据以函数返回值形式定义，这样每复用一次组件，就会返回一份新的data【类似于给每个组件实例创建一个私有的数据空间，让各个组件实例维护各自的数据】

 什么情况下是对象
   当我们 new Vue() 创建根实例时，此时也是创建了根组件，此组件不会被复用而造成对象内属性一变其他复用组件也跟着变的问题，此时data可以写成对象形式而不是函数返回对象的形式。
   根实例对象data可以是对象也可以是函数（根实例是单例），不会产生数据污染情况

 什么情况下是函数
   组件实例对象data必须为函数，目的是为了防止多个组件实例对象之间共用一个data，产生数据污染

十三. 数据变了视图不更新的原因

 数组
   通过下标的形式修改数组,修改的内容并没有被object.definproty添加getter和setter属性,没有变成响应式的数据,所以无法被检测到
   解决办法: 
     调用数组的方法: push, unshift,pop
     Vue.set(target, 下标, 内容) // 全局的使用方法
     this.$set(和上面一样)
     this.$focusUpdated 强制更新视图

 对象
   深层次的对象修改其中的一个对象属性,无法被检测到

 十四.Vuex
 Vuex是什么

专门在 Vue 中实现集中式状态（数据）管理的一个 Vue 插件，对 vue 应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的方式，且适用于任意组件间通信

  什么时候使用Vuex

多个组件依赖于同一状态
来自不同组件的行为需要变更同一状态

 vuex的运行原埋

在组件中通过dispatch调用actions中的方法，在actions方法中commits调用mutations中的方法、在mutations中的方法中可以直接操作state中的数据，只要state中的数据发生改变就会立刻响应到组件的视图上。 (异步)
在组件中通过commit调用mutations中的方法，在mutations中的方法中可以直接操作state中的数据，只要state中的数据发生改变就会立刻响应到组件的视图上。 (同步)

 vuex核心及使用

state 存储数据 
  组件中使用 this.$store.state.

mutations 对象 里面是方法，可以直接操作state中的数据
  注意: commit只能传一个参数 如果需要传递多个数据用复杂数据类型 比如 数组 对象
  是同步数据
  在组件中 this.$store.commit(“模块名/方法名"参数)

getters 是最state中的数据做逻辑处理 类似于计算属性
  在组件中 this.$store.getters.方法名
  在模块中同理: this.Sstore.getters.模块名.方法名

actions 也是可以操作数据，但是不能直接操作数据 它调用mutations中的方法来操作的数据
  actions中的方法是异步的 mutations中的方法是同步的
  在组件中异步修改数据:
    在组件中通过dispatch调用actions中的方法，在actions中调用mutations中的方法，在mutations中可以直接操作state中的数据
  在组件中 this.$store.dispatch(“模块名/方法名”，参数)
  this.$store.commit('模块名/actions方法名’，具体值)

modules模块化

十五.vue路由模式与区别
1、vue-router前端路由有两种模式，hash模式和history模式
hash模式
优点：

兼容性强，达到 IE8；
除发送 ajax和资源请求外不会发送其他多余请求；
改变 # 后的路径不会自动刷新页面；
无需服务器进行配合；
缺点：

访问路径上包含 # ，不美观；
对于需要锚点功能的需求会与当前路由机制发生冲突；
重定向操作时，后段无法获取 url完整路径；
history模式
优点：

符合 url 地址规范，没有 # ，使用起来比较美观；
后端可以获取到完整的路由信息；
可以使用 history.state获取完整的路由信息；
可以进行修改历史记录，并且不会立刻向后端发起请求；
缺点：

兼容性只到IE10；
改变 url路径后会重新请求资源；
若访问的路由地址不存在时会报404，需服务端配合支持重定向返回统一的404页面；
如果对于项目没有硬性标准要求，可以直接使用 hash模式开发。


 
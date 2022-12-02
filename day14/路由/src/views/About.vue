<template>
  <div>
 </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {

  },
  created () {

  },
  mounted () {

  },
  components: {

  },
  computed: {

  },
  watch: {

  },
  // 通过路由规则，进入该组件时被调用
  beforeRouteEnter (to, from, next){
          console.log('about--beforeRouteEnter',to,from)
          if(to.meta.isAuth){
            if(localStorage.getItem('school')==='atguigu'){
              next()
            }else{
              alert('学校名不对，无权限查看')
            }
          }else{
            next()
          }
        },
        // 通过路由规则，离开该组件时被调用
    beforeRouteLeave (to, from, next) {
      console.log('about--beforeRouteEnter',to,from)
      next()
    },
    beforeRouteUpdate(to,from,next){

    }

}

</script>

<style lang='scss' scoped>
</style>

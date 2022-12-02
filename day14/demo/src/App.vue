<template>
  <div id="app">
    <nav>
      <router-link to="/">匿名插槽</router-link> |
    <router-link to="/about">具名插槽</router-link>
    <router-link to="/shaet">作用域插槽</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>

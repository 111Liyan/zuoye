<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
 width: 100%;
 height: 100%;
 padding: 0;
 margin: 0;
 background-image:linear-gradient(90deg,#ffafbd,#ffc3a0);
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

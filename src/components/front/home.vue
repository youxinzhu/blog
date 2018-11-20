<template>
  <el-container class="home">
  <el-aside width="200px">
    <m-head></m-head>
  </el-aside>
  <el-main></el-main>

  </el-container>
</template>

<script>
import mHead from './head.vue'
export default {
  components: {
    mHead
  },
  name: 'home',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less" >
  .home{
    max-width: 960px;
    margin: 0 auto;
    margin-top: 60px;
  }
  .main{
    // background: #e6e3e3;
  }
  body{
    // background: url(../assets/bg.jpg) no-repeat center center fixed;
    background: white;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
</style>

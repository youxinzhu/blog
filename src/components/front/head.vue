<template >
    <div id='mMenu'>
      <router-link to="" class="mHead">
        <img src="../../assets/logo.png" alt="">
      </router-link>
      <el-menu class="nav" :default-active="activeIndex"  mode="horizontal" @select="handleSelect">
        <el-menu-item class="item" index="1">首页</el-menu-item>
        <el-menu-item class="item" index="2">微博</el-menu-item>
        <el-menu-item class="item" index="3">GitHub</el-menu-item>
        <el-menu-item class="item" index="4">links</el-menu-item>
      </el-menu>
    </div>
</template>

<script>
export default {
  name: 'mHead',
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
  #mMenu{
    .nav{
      display: inline-block;
      margin: 0 auto;
      border-bottom: 0px;
    }
    .mHead img{
      height: 60px;
      margin-right: 10%;
    }

  }
</style>

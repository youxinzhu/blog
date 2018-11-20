<template>
  <el-container  id="managementHome">
    <el-header>Header</el-header>
    <el-container>
      <el-aside >
        <m-aside></m-aside>
      </el-aside>
      <el-main>
         <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import mAside from './maside'
import test1 from './user/test1'
export default {
  components: {
    mAside, test1
  },
  name: 'home',
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less" >
  #managementHome{
    .el-container{
      position:absolute;
      top:60px;
      left:0px;
      right:0px;
      bottom:0px;
      padding:0;
      margin: 0;
    }
    .el-header{
      background: rgb(91, 100, 91);
    }
    .el-aside{
      background:  rgb(164, 132, 185);
      height: 100%;
      border: 1px solid #eee
    }
    .el-main{
      background: khaki;
    }
  }
</style>

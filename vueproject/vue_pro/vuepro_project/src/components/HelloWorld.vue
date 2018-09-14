<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <router-link to="/HomePage">
      <el-button>主体框架界面</el-button>
    </router-link>

    <router-link to="/Typography">
      <el-button>Typography 字体</el-button>
    </router-link>

    <router-link to="/Icon">
      <el-button>Icon 图标</el-button>
    </router-link>

    <router-link to="/DropDown">
      <el-button>DropDown 下拉列表</el-button>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <div>
    <div id="show">
      {{msg}}
    </div>

    <el-row>
      <el-button type="primary" @click='obtainData'>请求网络</el-button>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "ObtainData",
    data() {
      return {
        msg: '显示初始化'
      }
    },
    methods: {
      obtainData: function () {
        this.$axios.get("https://gank.io/api/today")
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  }
</script>

<style scoped>

</style>

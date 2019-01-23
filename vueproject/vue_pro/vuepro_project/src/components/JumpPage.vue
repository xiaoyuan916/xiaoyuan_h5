<template>
  <div>
    <el-button type="primary" @click='jump'>跳转到另外的界面</el-button>
  </div>
</template>

<script>
  export default {
    name: "JumpPage",
    methods: {
      jump: function () {
        this.$router.push({path: '/'});
        // this.$router.push({path: '/order/page1',query:{ id:'2'}});
        // this.$router.push({name: '/order/page2',params:{ id:'6'}});

      }
    }
  }
</script>

<style scoped>

</style>

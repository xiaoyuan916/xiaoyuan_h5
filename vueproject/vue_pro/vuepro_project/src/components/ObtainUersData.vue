<template>
  <div>
    <el-row>
      <el-button type="primary" @click='obtainData'>请求网络</el-button>
    </el-row>

    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="userName"
        label="名字"
        width="180">
      </el-table-column>
      <el-table-column
        prop="password"
        label="密码"
        width="180">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="电话">
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
  export default {
    name: "ObtainUersData",
    data() {
      return {
        tableData: [{
          "userId": 1,
          "userName": "zhangsan",
          "password": "1234",
          "phone": "12345678901"
        }]
      }
    },
    methods: {
      obtainData: function () {
        this.$axios.get("http://192.168.22.91:8080/user/all/1/10")
          .then(response => {
            console.log(response);
            this.tableData = response.data.userList;
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

<template>
  <div>
    <div id="show">
      {{msg}}
    </div>

    <el-row>
      <el-button type="primary" @click='submitFromWeb'>调用Native方法</el-button>
    </el-row>
  </div>
</template>

<script>
  import {init} from '../lib/init.js'

  export default {
    name: "JsToJava",
    data() {
      return {
        msg: '显示初始化'
      }
    },
    mounted: function () {
      //初始化
      init()
    },
    methods: {
      submitFromWeb: function () {
        console.log("触发submitFromWeb");
        window.WebViewJavascriptBridge.callHandler(
          'submitFromWeb'
          , {'param': '中文测试'}
          , function (responseData) {
            document.getElementById("show").innerHTML = "js调用java = " + responseData
          }
        );
      }
    }
  }
</script>

<style scoped>

</style>

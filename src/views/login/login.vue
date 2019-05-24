<!--login-->
<template>
  <div>
    <h1>login</h1>
    <el-button type="primary" class="btnCss" @click="login()">登录</el-button>
  </div>
</template>
<script>

  export default {
    data() {
      return {}
    },
    methods: {
      login() {
        this.$router.push({
          path: '/home/dashboard',
        });
      }
    },
  };
</script>
<style rel="stylesheet/scss" lang="scss">
</style>

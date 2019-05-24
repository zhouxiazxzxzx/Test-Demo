<!--login-->
<template>
  <div class="win">
    <div class="container">
      <h1>login</h1>
      <el-button type="primary" class="btnCss" @click="login()">登录</el-button>
    </div>

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
<style rel="stylesheet/scss" lang="scss" scoped>
  .win {
    background: #000 !important;
    .container {
      text-align: center;
      h1,p {
        font-size: 32px;
        color: #fff;
        padding: 20px;
      }
    }
  }
</style>

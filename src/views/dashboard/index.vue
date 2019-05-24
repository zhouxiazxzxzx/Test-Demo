<template>
  <div class="win" id="dashboard">
    <div class="dashboard-container ns-container">
      <h1>Hello! It is Dashboard</h1>
      <el-button type="primary" class="btnCss" @click="back()">退出</el-button>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'dashboard',
    components: {},
    data() {
      return {
        father: 'Welcome to Your Vue.js App',
      };
    },
    methods: {
      back() {
        this.$router.push({
          path: '/front/login',
        });
      }
    },
  };
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  #dashboard.win {
    background: #000 !important;
    .dashboard-container {
      text-align: center;
      h1 {
        font-size: 32px;
        color: #fff;
        padding: 20px;
      }
      img {
        width: 400px;
      }
    }
  }
</style>

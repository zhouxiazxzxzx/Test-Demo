<template>
  <div class="win" id="dashboard">
    <div class="dashboard-container ns-container">
      <h1>{{title}}</h1>
      <el-button type="primary" class="btnCss" @click="back()">退出</el-button>
      <div>
        <p>the window width: {{width}}px</p>
        <p>the window height: {{height}}px</p>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'dashboard',
    components: {},
    data() {
      return {
        title: 'Welcome to Your Vue.js App',
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    methods: {
      back() {
        this.$router.push({
          path: '/front/login',
        });
      }
    },
    mounted() {
      this.resizeFunc = () => {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
      };
      window.addEventListener('resize', this.resizeFunc);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.resizeFunc);
      this.resizeFunc = null;
    }
  };
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  #dashboard.win {
    background: #000 !important;
    .dashboard-container {
      text-align: center;
      h1, p {
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

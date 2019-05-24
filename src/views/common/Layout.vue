<template>
  <!--changing-over  work bench module-->
  <transition leave-active-class="" enter-active-class="out-in">
    <router-view :key="key"></router-view>
  </transition>
</template>

<script>
  export default {
    name: 'layout',
    data() {
      return {};
    },
    computed: {
      key() {
        return this.$route.name !== undefined
          ? this.$route.name + +new Date()
          : this.$route + +new Date();
      },
    },
    created() {

    },
  };
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>

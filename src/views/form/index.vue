<!--
 * @Descripttion: 
 * @version: 
 * @Author: miss zhang
 * @Date: 2020-12-08 10:45:26
 * @LastEditors: zhang zi fang
 * @LastEditTime: 2020-12-22 10:54:10
-->

<template>
  <div id="form" v-loading="loading"></div>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
    };
  },
  watch: {
    $route() {
      this.mounted();
    },
  },
  created() {},
  mounted() {
    this.mounted();
  },
  components: {},
  methods: {
    mounted() {
      this.loading = true;
      var _this = this;
      var iframe = document.createElement("iframe");
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.frameborder = 0;
      iframe.src = _this.$route.query.url;
      if (iframe.attachEvent) {
        iframe.attachEvent("onload", function () {
          setTimeout(() => {
            _this.loading = false;
          }, 300);
        });
      } else {
        iframe.onload = function () {
          setTimeout(() => {
            _this.loading = false;
          }, 300);
        };
      }
      var form = document.querySelector("#form");
      form.innerHTML = ''
      form.append(iframe);
    },
  },
  // end
};
</script>
<style>
#form {
  width: 100%;
  height: 100%;
}
</style>
    
<!--
 * @Descripttion: 
 * @version: 
 * @Author: miss zhang
 * @Date: 2020-07-14 10:49:10
 * @LastEditors: zhang zi fang
 * @LastEditTime: 2020-12-22 15:23:00
--> 
<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    try {
      if (localStorage.navBarLink) {
        this.$store.state.navBarLink = JSON.parse(localStorage.navBarLink);
      }
    } catch (error) {
      localStorage.navBarLink = "";
    }
  },
  watch: {
    navBarLink: {
      deep: true,
      handler(res) {
        localStorage.navBarLink = JSON.stringify(res);
      },
    },
    $route(to) {
      if (
        !this.$store.state.navBarLink.filter(
          (s) => s.path === to.path && s.meta.name === to.meta.name
        )[0]
      ) {
        this.$store.state.navBarLink.push(to);
        this.$store.state.navIndex = this.$store.state.navBarLink.length - 1;
      } else {
        this.$store.state.navBarLink.map((s, i) => {
          if (s.path === to.path) {
            this.$store.state.navIndex = i;
          }
        });
      }
    },
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  height: 100%;
  overflow: hidden;
  width: 100%;
}
</style>

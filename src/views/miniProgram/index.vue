<!--
 * @Descripttion: 
 * @version: 
 * @Author: miss zhang
 * @Date: 2020-12-22 11:09:07
 * @LastEditors: zhang zi fang
 * @LastEditTime: 2020-12-22 15:09:01
-->
<template>
  <div class="log">
    <ul>
      <li v-for="(item, index) in list" :key="index" @click="renderUrl(index)">
        {{ item.replace(/(\.md|\.\/)/g, "") }}
      </li>
      <!-- <div is="markdown-loader"></div> -->
    </ul>
  </div>
</template>
<script>
// import markdownLoader from "./markdownLoader.md";

export default {
  data() {
    return {
      list: [],
    };
  },
  created() {
    const context = require.context("./", true, /\.md$/);
    this.list = context.keys();
    
  },
  components: {
    // markdownLoader,
  },
  methods: {
    renderUrl(index) {
      this.$router.push({ path: "/miniProgramRender/A" + index });
    },
  },
};
</script>
<style lang="scss" scoped>
.log li {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #eee;
}
.log ul {
  text-decoration: none;
  list-style: none;
}
</style>
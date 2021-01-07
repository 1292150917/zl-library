<!--
 * @Descripttion: 
 * @version: 
 * @Author: miss zhang
 * @Date: 2020-12-22 14:18:46
 * @LastEditors: zhang zi fang
 * @LastEditTime: 2020-12-24 11:57:40
-->
<template>
  <div class="log">
    <div :is="is"></div>
  </div>
</template>
<script>
import vue from "vue";
export default {
  data() {
    return {
      is: "",
      modelKey: "",
    };
  },
  components: {},
  async created() {
    this.created();
  },
  methods: {
    async created() {
      var { id } = this.$route.params;
      const context = await require.context("./", true, /\.md$/);
      this.list = context.keys();
      var _v = this.list[id.replace(/A/, "")];
      vue.component(id, require(`${_v}`).default);
      this.is = id;
    },
  },
};
</script>
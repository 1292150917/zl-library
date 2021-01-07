<!--
 * @Descripttion: 
 * @version: 
 * @Author: miss zhang
 * @Date: 2020-12-07 13:53:12
 * @LastEditors: zhang zi fang
 * @LastEditTime: 2020-12-22 17:02:35
-->
<template>
  <div>
    <template v-for="(item, index) in list">
      <el-menu-item
        v-if="!item.children && item.meta.hidden !== false"
        :index="indexes + '-' + index"
        :key="index"
        @click.native="clickItem(item)">
        <!-- <i class="el-icon-location"></i> -->
        {{ item.meta.name }}
        </el-menu-item>
      <el-submenu v-if="item.children" :index="indexes + '-' + index" :key="index">
        <template slot="title">
          <!-- <i class="el-icon-location"></i> -->
          <span>{{ item.meta.name }}</span>
        </template>
        <el-menu-item-group>
          <zf-menu :list="item.children" :indexes="index + 1"></zf-menu>
        </el-menu-item-group>
      </el-submenu>
    </template>
  </div>
</template>

<script>
import zfMenu from "../zf-menu";
export default {
  name: "zf-menu",
  data() {
    return {};
  },
  props: ["list", "indexes"],
  components: {
    "zf-menu": zfMenu,
  },
  methods: {
    clickItem(v) {
      var query = {};
      if (v.meta.url) {
        query = {
          url: v.meta.url,
        };
      }
      this.$router.push({ path: v.path, query });
    },
  },
  mounted() {},
};
</script>
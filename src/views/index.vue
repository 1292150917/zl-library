<!--
 * @Descripttion: 
 * @version: 
 * @Author: miss zhang
 * @Date: 2020-12-03 14:25:26
 * @LastEditors: zhang zi fang
 * @LastEditTime: 2020-12-22 17:02:15
-->
<template>
  <div class="index">
    <el-container>
      <el-aside width="auto">
        <el-menu
          :collapse="iscollapse"
          default-active="2"
          class="el-menu-vertical"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <zf-menu :list="navList" :indexes="1"></zf-menu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header height="100px">
          <div class="header">
            <i
              @click="iscollapse = !iscollapse"
              :class="!iscollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
            ></i>
            <div>易用前端快捷开发插件</div>
            <div>
              <i class="el-icon-rank nav-title"></i>
              <i class="el-icon-switch-button"></i>
            </div>
          </div>
          <div class="select-index">
            <i class="el-icon-d-arrow-left left-block"></i>
            <i class="el-icon-house left-block"></i>
            <div>
              <span
                @click="navBarClick(item, index)"
                v-for="(item, index) in $store.state.navBarLink"
                :key="index"
                :class="$store.state.navIndex === index ? 'select_Index' : ''"
                >{{ item.meta.name }}
                <i @click.stop="close(index)" class="el-icon-close"></i>
                </span>
            </div>
          </div>
        </el-header>
        <el-main style="overflow: scroll; height: 0">
          <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import zfMenu from "../components/zf-menu";
import router from '../router/router'
export default {
  data() {
    return {
      tabPosition: "top",
      iscollapse: false,
      navList: [
        {
          name: "简介",
          router: "/",
        },
        {
          name: "生成工具",
          router: "/",
          children: [
            {
              name: "FORM生成",
              router: "/form",
            },
            {
              name: "前端CURD生成",
              router: "/curd",
            },
          ],
        },
        {
          name: "轮子",
          router: "/",
          children: [
            {
              name: "Dave",
              router: "/dave",
            },
            {
              name: "ui组件库",
              router: "/vueTool",
            },
          ],
        },
        {
          name: "node之api方法",
          router: "/",
          children: [
            {
              name: "微信小程序",
              router: "/miniProgram",
            },
            {
              name: "微信公众号",
              router: "/officialAccounts",
            },
            {
              name: "uniapp",
              router: "/uniapp",
            },
          ],
        },
        {
          name: "个人",
          router: "/",
          children: [
            {
              name: "博客",
              router: "/blog",
            },
            {
              name: "日志",
              router: "/log",
            },
          ],
        },
      ],
    };
  },
  components: {
    zfMenu,
  },
  watch: {
    navIndex(index) {
      localStorage.navIndex = index;
    },
  },
  created() {
    this.navList = router
    this.$store.state.navIndex = Number(localStorage.navIndex);
  },
  methods: {
    navBarClick(v, index) {
      var query = {};
      if (v.meta.url) {
        query = {
          url: v.meta.url,
        };
      }
      this.$router.push({ path: v.path, query });
      this.$store.state.navIndex = index;
    },
    close(index) {
      this.$store.state.navBarLink.splice(index, 1);
    },
  },
  mounted() {},
};
</script>
<style lang="scss">
.select-index {
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: calc(100% + 40px);
  margin-left: -20px;
  line-height: 40px;
  display: flex;
  align-items: center;
  height: 40px;
  .select_Index {
    background: #409eff;
    color: #fff;
  }
  span {
    display: inline-block;
    padding: 0px 15px;
    font-size: 12px;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }
}
.addbut {
  margin-bottom: 20px;
}
.el-form-item {
  margin-right: 30px;
}
.pagination {
  text-align: center;
  margin-top: 10px;
}
.el-menu-vertical li {
  width: 200px;
}
.index {
  height: 100%;
  .nav-title {
    margin-right: 15px;
  }
  .left-block {
    display: inline-block;
    width: 40px;
    text-align: center;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }
  .header {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    > i:nth-of-type(1) {
      font-size: 20px;
    }
  }
}
.-container {
  height: 100%;
}
.el-header,
.el-footer {
  color: #333;
  line-height: 60px;
}
.test {
  width: 50px;

  height: 200px;

  overflow: auto;

  float: left;

  margin: 5px;

  border: none;
}

.scrollbar {
  width: 30px;
  height: 300px;
  margin: 0 auto;
}

.el-main::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 8px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}

.el-main::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(233, 227, 227, 0.2);
  background: rgb(96, 144, 207);
}

.el-main::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(233, 227, 227, 0.2);
  border-radius: 10px;
  background: #ededed;
}

.el-aside {
  color: #333;
  line-height: 200px;
  height: 100vh;
  background-color: #545c64;
}

.el-container .el-main {
  color: #333;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
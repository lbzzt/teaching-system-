<template>
  <div class="home">
    <el-container style="height:100%">
      <!-- 左边侧边栏 -->
      <el-aside :width="allCollapse">
        <div class="aside-top">
          <div class="logo">
            <img src="../img/favicon.jpg" />
          </div>
          <div id="text">智学无忧教育</div>
        </div>
        <el-menu
          :default-active="wihte"
          class="el-menu-vertical-demo"
          background-color="#5F6368"
          text-color="#fff"
          active-text-color="#FFEB3A"
          :collapse="isCollapse"
          router
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">在线测试</span>
            </template>
            <el-menu-item-group v-for="(item,index) in test" :key="index">
              <el-menu-item
                :index="item.router"
                @click="addTab(item.name,item.router)"
              >{{item.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">基础数据</span>
            </template>
            <el-menu-item-group v-for="(item,index) in base" :key="index">
              <el-menu-item
                :index="item.router"
                @click="addTab(item.name,item.router)"
              >{{item.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 左边侧边栏 -->
      <el-container style="height:100%">
        <el-header>
          <!-- 点击控制左边侧栏按钮 -->
          <div id="click" @click="show" class="el-icon-caret-left"></div>
          <!-- 点击控制左边侧栏按钮 -->
          <!-- 标签页 -->
          <div class="Tab-Page">
            <el-tabs
              v-model="editableTabsValue2"
              type="card"
              @tab-click="tab(editableTabsValue2)"
              closable
              @tab-remove="removeTab"
            >
              <el-tab-pane
                v-for="item in editableTabs2"
                :key="item.name"
                :label="item.title"
                :name="item.name"
              >{{item.content}}</el-tab-pane>
            </el-tabs>
          </div>
          <!-- 标签页 -->
          <!-- 头部右边退出登录 -->
          <div class="back">
            <i class="el-icon-s-custom"></i>
            <span @click="backLogin">退出</span>
          </div>
          <div class="Avatar">
            <el-avatar :size="30" :src="circleUrl"></el-avatar>
          </div>
          <!-- 头部右边退出登录 -->
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 在线测试布局
      test: [
        { router: "MakeTestPaper", name: "老师出卷" },
        { router: "TestPaperMange", name: "试卷管理" },
        { router: "TestResult", name: "安排测试" },
        { router: "TestSetter", name: "批阅试卷" },
        { router: "ViewTestPaper", name: "测试成绩" }
      ],
      base: [
        { router: "ClassManage", name: "班级管理" },
        { router: "ModifyPassword", name: "学生管理" },
        { router: "StudentManage", name: "老师管理" },
        { router: "TeacherManage", name: "修改密码" }
      ],

      wihte: "",
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png", //用户图像
      isCollapse: false, //左边侧边栏隐藏显示
      allCollapse: "200px", //定义
      editableTabsValue2: "Home", //头部标签分页
      editableTabs2: [
        {
          title: "首页",
          name: "Home"
        }
      ],
      tabIndex: 2
    };
  },

  methods: {
    // 点击控制左边侧边栏按钮
    show() {
      var _this=this;
         this.isCollapse = !this.isCollapse;
      if (this.isCollapse) {
          setTimeout(function() {
          _this.allCollapse = "64px";
        },100); 
      } else {
        this.allCollapse = "200px";
      }   
    },
    //点击返回登陆页面
    backLogin() {
      this.$router.push("/login");
    },
    //点击返回登陆页面
    // 点击控制左边侧边栏按钮
    // 标签页
    //标签页路由跳转
    tab(y) {
      this.wihte = y;
      this.$router.push("/" + y);
      console.log(y);
    },
    //标签页路由跳转
    // 点击添加当前页面名字为标签页
    addTab(uname, url) {
      this.editableTabsValue2 = url; //选中当前路由并且样式赋值；
      for (var i = 0; i < this.editableTabs2.length; i++) {
        //循环
        if (this.editableTabs2[i].title == uname) {
          return;
        }
      }
      this.editableTabs2.push({
        title: uname,
        name: url
      });
    },
    // 关闭当前页面并往前面跳转
    removeTab(targetName) {
      // console.log(targetName)

      // this.$router.push("/"+targetName);

      let tabs = this.editableTabs2;
      let activeName = this.editableTabsValue2;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
              // console.tab.name

            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
              this.$router.push(nextTab.name);
              this.wihte = nextTab.name;
            }
          }
        });
      }

      this.editableTabsValue2 = activeName;
      // // this.editableTabsValue2=
      this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
    }

    // 标签页

    // 头部右边下拉菜单
  }
};
</script>

<style lang="less">
.home {
  margin: 0px;
  padding: 0px;
  height: 100%;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  // line-height: 50px;
  height: 46px !important;
  padding-left: 0px !important;
  display: flex;
}
#top-aside {
  width: 200px;
  flex: none;
}
.el-aside {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 100%;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-menu {
  border: 0px !important;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

/* 左边侧边栏 */
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  // min-height: 400px;
}

.aside-top {
  width: 200px;
  height:9%;
  // border: 1px solid red;
  background: #ffeb3a;
  line-height: 3rem;
  display: flex;
}
/* logo */
.aside-top .logo {
  width: 2.5rem;
  height: 70%;
  border-radius: 50%;
  margin-top: 0.5rem;
  margin-left: 1rem;
  box-shadow: 0px 0px 3px 3px #008800;
}

.logo img {
  width: 100%;
  height: 100%;
}
.aside-top #text {
  width: 7rem;
  height: 100%;
  color: #008800;
  // border: 1px solid black;
  font-weight: bold;
  font-size: 14px;
}
/* logo */

.el-submenu {
  text-align: left;
}
.el-menu--collapse {
  height: 91%;
}
.el-menu {
  height: 91%;
}
/* 左边侧边栏 */
/* 右边头部样式 */

#click {
  width: 2rem;
  height: 100%;
  background: #008800;
  margin: 0px;
  padding: 0px;
  color: #fff;
  line-height: 3rem;
  flex: none;
}

/* 标签页 */
.Tab-Page {
  width: 100%;
  height: 70%;
  // border: 1px solid black;
  margin: 0.4rem 1rem;
  flex: 1;
}

/* 标签页 */
/* 头部右边用户头像 */
.back {
  width: 3rem;
  height: 100%;
  margin-left: 15%;
  line-height: 50px;
  //  border: 1px solid black;
  flex: none;
}
.back span {
  font-size: 13px;
}
.back span:hover {
  cursor: pointer;
}
.Avatar {
  width: 3rem;
  height: 60%;
  line-height: 50px;
  margin-top: 1.2%;
  //  border: 1px solid black;
  flex: none;
}

/* 头部右边用户头像*/

/* 右边头部样式 */
</style>

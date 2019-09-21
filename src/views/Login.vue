<template>
  <div id="login">
    <div id="mian">
      <div id="pic">
        <ul>
          <li class="ico">
            <img src="../img/favicon.jpg" alt />
          </li>
          <li class="font-color">智学无忧后台系统</li>
          <li>做最有态度、责任、良心的IT教育</li>
        </ul>
      </div>
      <el-form ref="loginForm" :model="form" :rules="rules" label-width="20px" class="login-box">
        <el-form-item prop="username">
          <el-input
            type="text"
            placeholder="请输入账号"
            class="input"
            prefix-icon="el-icon-s-custom"
            v-model="form.username"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
            v-model="form.password"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-checkbox class="rememberme">记住密码</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-on:click="onSubmit('loginForm')">登录</el-button>
        </el-form-item>
      </el-form>

      <el-dialog title="温馨提示" :visible.sync="dialogVisible" width="30%">
        <span>请输入账号和密码</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';


export default {
  name: "Login",
  data() {
    return {
      form: {
        username:"",
        password: ""
      },

      // 表单验证，需要在 el-form-item 元素中增加 prop 属性
      rules: {
        username: [
          { required: true, message: "账号不可为空", trigger: "blur" }
        ],
        password: [{ required: true, message: "密码不可为空", trigger: "blur" }]
      },

      // 对话框显示和隐藏
      dialogVisible: false
    };
  },
  methods: {
    onSubmit(formName) {
      // 为表单绑定验证功能
      this.$refs[formName].validate(valid => {
        if (valid) {
           this.axios.get('http://192.168.1.188/api/OAuth/authenticate?stuMobile='+_this.form.username+'&stuPassword='+_this.form.password,
        ).then(function(res){
              console.log(res.data)
           _this.$router.push("/Home");
        })

          // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
          
        } else {
          this.dialogVisible = true;
          return false;
        }
      });
      // var _this=this;
      //  this.axios.get('http://192.168.1.188/api/OAuth/authenticate?stuMobile='+_this.form.username+'&stuPassword='+_this.form.password,
      //   ).then(function(res){
      //      this.$message({
			// 	      	message: '登录成功',
			// 	      	type: 'success'
      //       });
      //      _this.$router.push("/Home");
      //   }).catch(function(req){
      //     // console.log(req)
      //     if(_this.form.username.trim()==''||_this.form.password.trim()==''){
      //         this.$message.error('账号或者密码不能为空！');
      //           return false;
      //       }else{
      //         this.$message.error('账号或者密码错误，请重新输入！');
      //           return false;
      //       }
      //   })
  // 登录事件


    }
  }
}
</script>

<style scoped lang="less">

body {
  margin: 0;
  padding: 0;
}
#login {
  width: 100%;
  height: 100%;
  background: url("../img/background.jpg") 0px 0px no-repeat;
  background-size: cover;
  //   border:1px solid red;
  overflow: hidden;
}

#mian {
  width: 400px;
  height: 15rem;
  margin: 6rem auto;
  background: #d8ecf5;
  display: flex;
  box-shadow: 0 0 10px 10px #4f90ee;
  border-radius: 0.5rem;
}

.login-box {
  width: 200px;
  height: 100%;
}
.input {
  margin-top: 5%;
}
.login-title {
  text-align: center;
  margin: 0 auto 0px auto;
  color: #303133;
}
.el-input {
  width: 160px;
  height: 20px;
}
.el-button {
  width: 160px;
}
#pic {
  width: 200px;
  height: 15rem;
  border-right: 1px solid #0c8b7d;
  border-image: -webkit-linear-gradient(#ffffff, #0c8b7d, #ffffff) 2 10 2;
}
#pic,
ul,
li {
  padding: 0px;
  margin: 0px;
  list-style: none;
}
#pic li {
  color: #9ca4aa;
  text-align: center;
  font-size: 8px;
  font-weight: bold;
  line-height: 3rem;
}
.ico {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  text-align: center;
  margin: 1rem auto;
  background: #ffffff;
  box-shadow: 0 0 5px 5px #cccccc;
}
.ico img {
  vertical-align: middle;
  margin: 1rem 0px;
}
#pic .font-color {
  color: #0e8c7e;
  font-size: 20px;
}

// 图标样式
/deep/ .el-input__icon,
.el-icon-s-custom {
  color: #67c239;
  font-size: 15px;
}

// 登录按钮样式
.el-button {
  background: #67c239;
  border: 0px;
}
.el-button:hover {
  background: #67c239;
}
</style>
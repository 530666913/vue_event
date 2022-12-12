<template>
  <div class="container_box">
    <div class="reg_box">
      <!-- 表单头部区域 -->
      <div class="title_box"></div>
      <!-- 表单注册区域 -->
      <el-form :model="form" ref="form" :rules="rules">
        <el-form-item prop="username">
          <el-input placeholder="请输入用户名" v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="请输入密码" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item prop="repassword">
          <el-input type="password" placeholder="请再次确认密码"  v-model="form.repassword"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="reg_button" type="primary" @click="registerFn">注册</el-button>
          <el-link type="info">去登录</el-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { registerAPI } from '@/api'
// 经验：前端绑定的数据对象名，可以和要调用的功能接口的参数名一致,发请求时传参方便
export default {
  name: 'my_register',
  data () {
    // 自定义校验规则,注意必须在data函数里定义此箭头函数，才能确保this.form使用
    // 自定义校验规则函数，第一个参数为规则设置对象，第二个为表单里的值，第三个回调函数。
    const checkPwdFn = (rule, value, callback) => {
      if (value !== this.form.repassword) {
        callback(new Error('两次输入的密码不一致'))
      } else {
        callback()
      }
    }
    return {
      // 表单数据对象
      form: {
        username: '',
        password: '',
        repassword: ''
      },
      // 表单校验规则对象
      rules: {
        username: [
          { required: true, message: '请输入您的账号', trigger: 'blur' },
          { pattern: /^\S{6,15}$/, message: '密码必须为6-15的非空字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入您的密码', trigger: 'blur' },
          { pattern: /^\S{6,15}$/, message: '密码必须为6-15的非空字符', trigger: 'blur' }
        ],
        repassword: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { pattern: /^\S{6,15}$/, message: '密码必须为6-15的非空字符', trigger: 'blur' },
          { validator: checkPwdFn, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 注册点击事件
    registerFn () {
      // JS兜底校验,防止用户不输入账号密码即点击注册。
      this.$refs.form.validate(async valid => {
        if (valid) {
          // 通过校验,则向后台发起请求
          // elementUI在Vue原型链上添加了弹窗提示，$message属性,
          const { data: res } = await registerAPI(this.form)
          if (res.code !== 0) return this.$message.error(res.message)
          this.$message.success(res.message)
          this.$router.push('/login')
        } else {
          return false // 若未通过校验行为，则阻止默认的提交行为
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.container_box {
  height: 100%;
  background: url("../../assets/images/login_bg.jpg") center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .reg_box {
    width: 400px;
    height: 335px;
    background-color: #fff;
    padding: 0px 30px;
    .title_box {
      width: 100%;
      height: 60px;
      background: url("../../assets/images/login_title.png") no-repeat center;
    }
    .reg_button {
      width: 100%;
    }

  }
}
</style>

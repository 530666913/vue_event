<template>
  <div class="login_container">
    <!-- 登录盒子 -->
    <div class="login_box">
      <!-- 登录标题 -->
      <div class="login_title"></div>
      <!-- 登录表单区域 -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'my_login'
}
</script>

<style lang="less" scoped>
.login_container {
  height: 100%;
  background: url("../../assets/images/login_bg.jpg") center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .login_box {
    width: 400px;
    height: 335px;
    background-color: #fff;
    padding: 0px 30px;
    .login_title {
      width: 100%;
      height: 60px;
      background: url("../../assets/images/login_title.png") no-repeat center;
    }
  }
}
</style>

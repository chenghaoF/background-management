<template>
  <div class="login-container">
    <el-form
      :model="LoginForm"
      ref="Loginref"
      :rules="LoginRules"
      class="LoginForm"
    >
      <h3 class="font">用户登录</h3>
      <!-- <svg-icon className="svg-language" icon="language"></svg-icon> -->
      <h3 class="Translation">Translation</h3>
      <el-form-item prop="username">
        <el-input
          v-model="LoginForm.username"
          :prefix-icon="Avatar"
          class="LoginInput"
        ></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          :type="text.tt"
          v-model="LoginForm.password"
          class="LoginInput"
          :prefix-icon="Compass"
        >
          <template #suffix>
            <el-icon class="el-input__icon" @click="UpdateVie"
              ><View v-if="text.tt == 'text'" />
              <Hide v-if="text.tt == 'password'" />
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-button
        type="primary"
        class="LoginButon"
        @click="Login()"
        :loading="loding"
        >登录</el-button
      >
      <!-- <svg-icon className="svg-language" icon="language"></svg-icon> -->
    </el-form>
  </div>
</template>

<script setup>
// eslint-disable-next-line
import { Avatar, Compass, View, Hide } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { LoginRules } from './rules'

const loding = ref(false)

const LoginForm = reactive({
  username: '',
  password: ''
})
const text = reactive({
  tt: 'password'
})
const UpdateVie = () => {
  text.tt = text.tt === 'password' ? 'text' : 'password'
  // text.tt = text.tt === 'password' ? 'password' : 'text'
}
const Loginref = ref('Loginref')
const Login = async () => {
  loding.value = true
  if (!Loginref.value) return
  await Loginref.value.validate((valid) => {
    if (valid) {
      alert('登录')
      loding.value = false
    } else {
      alert('11')
      loding.value = false
    }
  })
}
</script>
<style lang="scss">
.Translation {
  position: absolute;
  right: 20px;
  top: 50px;
  color: white;
}
.LoginButon {
  height: 40px !important;
  width: 100%;
}
.el-textarea__inner,
.el-input__inner {
  background: transparent !important;
}
.el-input__wrapper {
  color: white;
  height: 50px;
  background: rgba(0, 0, 0, 0.1) !important;
  box-shadow: none !important;
  input {
    color: white;
  }
}
.LoginInput {
  background-color: transparent !important;
}
.font {
  text-align: center;
  color: white;
  margin-bottom: 60px;
  font-size: 45px;
}
.el-icon svg {
  width: 25px !important;
  height: 25px !important;
}
.el-icon {
  font-size: 60px;
  width: 40px !important;
  padding: 1px;
}
.login-container {
  position: relative;
  min-height: 100%;
  width: 100%;
  background-color: #2d3a4b;
  overflow: hidden;
}
.LoginForm {
  position: absolute;
  left: 50%;
  top: 100px;
  transform: translate(-50%);
  width: 520px;
}
</style>

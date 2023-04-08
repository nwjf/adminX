<template>
  <div class="login">
    <div class="login-box">
      <div class="head">
        <img src="../assets/login/login-header.png" alt="" />
      </div>
      <div class="form">
        <img class="profile-avatar" src="../assets/avatar.png" alt="" />
        <div class="content">
          <el-form
            @keyup.enter="onSubmit(formRef)"
            ref="formRef"
            :rules="rules"
            size="large"
            :model="form"
          >

            <el-form-item prop="username">
              <el-input
                ref="usernameRef"
                type="text"
                clearable
                v-model="form.username"
                placeholder="Please enter an account"
              >
                <template #prefix>
                  <Icon
                    name="el-icon-avatar"
                    class="form-item-icon"
                    size="16"
                    color="#8D9095"
                  />
                </template>
              </el-input>
            </el-form-item>

            <el-form-item prop="password">
              <el-input
                ref="passwordRef"
                v-model="form.password"
                type="password"
                placeholder="Please input a password"
                show-password
              >
                <template #prefix>
                  <Icon
                    name="el-icon-unlock"
                    class="form-item-icon"
                    size="16"
                    color="#8D9095"
                  />
                </template>
              </el-input>
            </el-form-item>

            <el-form-item>
              <el-button
                :loading="form.loading"
                class="submit-button"
                round
                type="primary"
                size="large"
                @click="onSubmit(formRef)"
              >
                Sign in
              </el-button>
            </el-form-item>
            
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Login',
})
</script>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import * as pageBubble from '../utils/pageBubble';
import { ElForm } from 'element-plus';

const formRef = ref<InstanceType<typeof ElForm>>();

// 表单数据
const form = reactive({
  username: '',
  password: '',
  loading: false,
});

// 表单验证规则
const rules = reactive({
  username: { required: true, message: 'Please enter an account' },
  password: { required: true, message: 'Please input a password' },
});

// 提交
const onSubmit = (formRef: any) => {
  console.log('====', formRef.validate);
  // formRef.validate((valid) => {});
};

</script>


<style scoped lang="scss">
.login {
  position: absolute;
  top: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: #000;
  .login-box {
    overflow: hidden;
    width: 430px;
    padding: 0;
    background: #1d1e1f;
    margin-bottom: 80px;
  }
  .head {
    background: #ccccff;
    img {
      display: block;
      width: 430px;
      margin: 0 auto;
      user-select: none;
    }
  }
  .form {
    position: relative;
    .profile-avatar {
      display: block;
      position: absolute;
      height: 100px;
      width: 100px;
      border-radius: 50%;
      border: 4px solid var(--ba-bg-color-overlay);
      top: -50px;
      right: calc(50% - 50px);
      z-index: 2;
      user-select: none;
    }
    .content {
      padding: 100px 40px 40px 40px;
    }
    .submit-button {
      width: 100%;
      letter-spacing: 2px;
      font-weight: 300;
      margin-top: 15px;
      --el-button-bg-color: var(--el-color-primary);
    }
  }
}

@media screen and (max-width: 720px) {
  .login {
    display: flex;
    align-items: center;
    justify-content: center;
    .login-box {
      width: 340px;
      margin-top: 0;
    }
  }
}
.chang-lang :deep(.el-dropdown-menu__item) {
  justify-content: center;
}
.content :deep(.el-input__prefix) {
  display: flex;
  align-items: center;
}
.captcha-img {
  width: 100%;
}

// 暗黑样式
@at-root .dark {
  .bubble {
    background: url(/@/assets/bg-dark.jpg) repeat;
  }
  .login {
    .login-box {
      background: #161b22;
    }
    .head {
      img {
        filter: brightness(61%);
      }
    }
    .form {
      .submit-button {
        --el-button-bg-color: var(--el-color-primary-light-5);
        --el-button-border-color: rgba(240, 252, 241, 0.1);
      }
    }
  }
  .captcha-img {
    filter: brightness(61%);
  }
}
@media screen and (max-height: 800px) {
  .login .login-box {
    margin-bottom: 0;
  }
}
</style>

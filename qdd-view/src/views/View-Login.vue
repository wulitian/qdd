<template>
  <div class="container">
    <a-form
      :label-col="6"
      :wrapper-col="18"
      :model="formItem"
      :rules="rules"
      class="login-box"
    >
      <h3 class="login-title">企朵朵登录</h3>
      <a-form-item label="账号" name="username" v-bind="validateInfos.username">
        <a-input v-model:value="formItem.username"> </a-input>
      </a-form-item>
      <a-form-item label="密码" name="password" v-bind="validateInfos.password">
        <a-input-password v-model:value="formItem.password" />
      </a-form-item>
      <div class="btn-group">
        <a-button type="primary" @click.prevent="onSubmit">登 录</a-button>
        <a-button type="default" style="margin-left: 10px">注 册</a-button>
      </div>
    </a-form>
  </div>
</template>

<script lang="ts">
import axios from "@/utils/request";
import { defineComponent, reactive } from "vue";
import { Form } from "ant-design-vue";
import { useRouter } from "vue-router";
import md5 from "js-md5";
import { message } from 'ant-design-vue';
export default defineComponent({
  setup() {
    const router = useRouter();
    const useForm = Form.useForm;
    const rules = reactive({
      username: [
        {
          required: true,
          message: "请输入用户名",
          trigger: "blur",
        },
      ],
      password: [
        {
          required: true,
          message: "请输入密码",
          trigger: "blur",
        },
      ],
    });
    const formItem = reactive({
      username: "",
      password: "",
    });
    const { validate, validateInfos } = useForm(formItem, rules);
    const onSubmit = () => {
      validate()
        .then((res) => {
          axios
            .post("/user/login", {
              username: res.username,
              password: md5(res.password),
            })
            .then((res) => {
              if (res.code === 200) {
                window.sessionStorage.setItem("token", res.data.token);
                router.push({
                  path: "/main",
                });
              }
              if(res.code === 400){
                message.error(res.message);
              }
            });
        })
        .catch((err) => {
          console.log("error", err);
        });
    };
    return {
      router,
      useForm,
      rules,
      formItem,
      validateInfos,
      onSubmit,
    };
  },
});
</script>
<style scoped>
.container {
  padding-top: 200px;
  background: url("../assets/pcbg.png") center center no-repeat;
  background-size: 100%;
  height: 100vh;
  width: 100%;
}
.login-box {
  border: 1px solid #dcdfe6;
  width: 450px;
  height: 310px;
  padding: 35px;
  border-radius: 20px;
  box-shadow: 0 0 29px #e9e7e7;
  background: #fff;
  margin: 100px auto 0 auto;
}
.login-title {
  text-align: center;
  margin: 0 auto 30px auto;
}
.btn-group {
  text-align: center;
}
</style>

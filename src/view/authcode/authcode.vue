<!--
 * @Author: mfxhb
 * @Date: 2022-11-27 10:47:13
 * @LastEditTime: 2022-11-27 12:05:34
 * @Description: 
-->
<template>
  <div>
    <el-form
      style="width: 50%; margin: 30px auto"
      label-width="100"
      ref="formRef"
      :model="form"
      :rules="formRules"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-row :gutter="20">
        <el-form-item label="验证码" prop="authcode">
          <el-col :span="18">
            <el-input v-model="form.authcode"></el-input>
          </el-col>
          <el-col :span="6">
            <img @click="resetCode" :src="authcodeImage" />
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit(formRef)">提交</el-button>
          <el-button @click="resetform(formRef)">重置</el-button>
        </el-form-item>
      </el-row>
    </el-form>
    <el-alert title="账号:admin 密码:admin123" type="success" />
  </div>
</template>

<script name="Authcode" setup lang="ts">
import { reactive, ref, toRaw } from "vue";
import { ElMessage, FormInstance, FormRules } from "element-plus";
import { FormType } from "./authcode.typer";
import request from "@/axios/axios";
const formRef = ref<FormInstance>();
const baseUrl = import.meta.env.ENV_baseurl;
const authcodeImage = ref<string>(baseUrl + "/auth/code"); // 验证码api
const form = reactive<FormType>({
  username: "",
  password: "",
  authcode: "",
});
const formRules = reactive<FormRules>({
  username: [
    {
      required: true,
      message: "账户名必须填写",
    },
  ],
  password: [
    {
      required: true,
      message: "密码不能为空",
    },
  ],
  authcode: [{ required: true, message: "验证码不能为空" }],
});
const resetCode = () => {
  authcodeImage.value = `${authcodeImage.value}?${Math.random()}`;
};
const submit = (formRef: FormInstance | undefined) => {
  if (!formRef) return;
  formRef.validate(async (isok) => {
    if (isok) {
      const params = toRaw(form);
      console.log("校验通过", params);
      const { data } = await request({
        url: "auth/check",
        method: "POST",
        data: params,
      });
      const type = data.code == 200 ? "success" : "error";
      ElMessage({
        type,
        message: data.message,
      });
    }
  });
};
const resetform = (formRef: FormInstance | undefined) => {
  if (!formRef) return;
  formRef.resetFields();
};
</script>

<style scoped></style>

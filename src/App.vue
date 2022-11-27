<!--
 * @Author: mfxhb
 * @Date: 2022-11-27 10:21:33
 * @LastEditTime: 2022-11-27 10:53:55
 * @Description: 
-->
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { useRouter } from "vue-router";
import { navlistRoutes } from "./router/router";

const router = useRouter();
// qk 方法
const navchange = (path: string) => {
  router.push(path);
};
</script>

<template>
  <div>
    <xhbMiannav @change="navchange" :navlist="navlistRoutes"></xhbMiannav>
    <div class="main-bd">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped></style>

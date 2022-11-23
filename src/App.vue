<!--
 * @Author: mfxhb
 * @Date: 2022-11-23 11:34:12
 * @LastEditTime: 2022-11-23 16:16:25
 * @Description: 
-->
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import xhbMainnav from "./components/xhb-mainnav/xhb-mainnav.vue";
import { Ref, ref } from "vue";
const navlist = ref<{ label: string; value: string }[]>([
  {
    label: "测试",
    value: "/test",
  },
]);
for (let k = 0, len = 40; k < len; k++) {
  navlist.value.push({
    label: "测试" + k,
    value: "/test" + k,
  });
}
</script>

<template>
  <div class="app-main">
    <xhbMainnav :navlist="navlist"></xhbMainnav>
    <div class="main-bd">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped>
.main-bd {
  min-height: 100vh;
  margin-top: 20px;
}
</style>

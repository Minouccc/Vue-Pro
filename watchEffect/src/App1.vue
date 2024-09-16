<script setup lang="ts">
import { ref, watchEffect } from "vue";

const a = ref(true);
const b = ref(false);

const onClick = () => {
  b.value = !b.value;
};

/* 此时点击按钮 不会触发更新 底层会把传入的回调进行一次依赖收集 当执行a.value为true时 后面的b.value没执行到*/
// watchEffect(() => {
//   if (a.value || b.value) {
//     console.log("a 或 b 的值为 true");
//   }
// });

/* 解决方案 */
watchEffect(() => {
  b.value;
  if (a.value || b.value) {
    console.log("a 或 b 的值为 true");
  }
});
</script>

<template>
  <button @click="onClick">按钮</button>
</template>

<style scoped></style>

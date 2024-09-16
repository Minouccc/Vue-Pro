<script setup lang="ts">
import { ref, watchEffect } from "vue";

const message1 = ref();
const message2 = ref();

/* 初始会执行一次 */
watchEffect((before) => {
  console.log(message1.value, "message1");
  console.log(message2.value, "message2");
  /* 监听到改变 依赖触发后才执行 初始不执行 用于清除副作用 最先console */
  before(() => {
    console.log("before");
  });
});

/* 停止监听 stopWatch点击后还是会触发一次before */
const stop = watchEffect((before) => {
  console.log(message1.value, "message1");
  console.log(message2.value, "message2");
  before(() => {
    console.log("before");
  });
});
const stopWatch = () => stop();

/* 监听 dom */
watchEffect(
  () => {
    const dom: HTMLInputElement = document.querySelector(
      "#el"
    ) as HTMLInputElement;
    console.log(dom, "dom");
  },
  {
    flush: "post", // 组件更新之后才能获取 dom
  }
);
</script>

<template>
  case1: <input id="el" v-model="message1" type="text" />
  <hr />
  case2: <input v-model="message2" type="text" />
  <hr />
  <button @click="stopWatch">stopWatch</button>
</template>

<style scoped></style>

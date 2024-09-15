<!-- ref 获取dom -->
<script setup lang="ts">
import { ref } from "vue";

const dom = ref<HTMLDivElement>();

const change = () => {
  console.log(dom.value?.innerHTML); // 不能在 setup 打印 此时 dom 未渲染
};
</script>

<template>
  <div ref="dom">ref dom</div>
  <button @click="change">修改</button>
</template>

<style scoped></style>

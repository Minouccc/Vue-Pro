<!-- reactive局限性 不能替换整个对象 -->
<script setup lang="ts">
import { reactive } from "vue";

let state = reactive({ count: 0 });

// 上面的 ({ count: 0 }) 引用将不再被追踪
// (响应性连接已丢失！)
const handleClick = () => {
  state = reactive({ count: 1 });
  console.log(state); // {count: 1} 视图不更新
};
</script>

<template>
  <div>{{ state.count }}</div>
  <button @click="handleClick">handleClick</button>
</template>

<style scoped></style>

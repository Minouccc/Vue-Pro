<!-- reactive局限性 对解构操作不友好 -->
<script setup lang="ts">
import { reactive } from "vue";

const state = reactive({ count: 0 });

// 当解构时，count 已经与 state.count 断开连接
let { count } = state;
// 不会影响原始的 state
count++;

// 该函数接收到的是一个普通的数字
// 并且无法追踪 state.count 的变化
// 我们必须传入整个对象以保持响应性
// callSomeFunction(state.count);
</script>

<template></template>

<style scoped></style>

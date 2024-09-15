<!-- 作为 reactive 对象的属性 自动解包为普通属性 -->
<script setup lang="ts">
import { reactive, ref, shallowReactive } from "vue";

const count = ref(0);
const state = reactive({ count });

console.log(state.count); // 0
state.count = 1;
console.log(count.value); // 1

const otherCount = ref(2);
state.count = otherCount;
console.log(state.count); // 2
console.log(count.value); // 1

const shallowState = shallowReactive({ count });
// 这里需要 .value
console.log(shallowState.count.value); // 只有当嵌套在一个深层响应式对象内时，才会发生 ref 解包
</script>

<template></template>

<style scoped></style>

<!-- 在模板渲染上下文中，只有顶级的 ref 属性才会被解包 -->
<script setup lang="ts">
import { ref } from "vue";

/** count 和 object 是顶级属性，但 object.id 不是 */
const count = ref(0);
const object = { id: ref(1) };

/** 可以将 id 解构为一个顶级属性 */
const { id } = object;
</script>

<template>
  <!-- 2 -->
  <div>{{ count + 1 }}</div>

  <!-- 表达式不会按预期工作 -->
  <div>{{ object.id + 1 }}</div>

  <!-- 2 -->
  <div>{{ id + 1 }}</div>

  <!-- 如果 ref 是文本插值的最终计算值 (即 {{ }} 标签)，那么它将被解包  -->
  <div>{{ object.id }}</div>
</template>

<style scoped></style>

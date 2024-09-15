<!-- 当响应式变量作为props传值 -->
<script setup lang="ts">
import { isRef, watch } from "vue";

const props = defineProps<{
  nameArr: string[];
}>();

watch(
  () => props.nameArr,
  (n) => {
    console.log("watch nameArr", n);
  },
  {
    deep: true,
  }
);
console.log(isRef(props.nameArr), "Text");
</script>

<template>
  <div>Test</div>
  <li v-for="i in nameArr">Test arr:{{ i }}</li>
</template>

<style scoped></style>

<!-- toRef 为源响应式对象上的某个属性新创建一个ref 保持响应式连接-->
<script setup lang="ts">
import { toRef, toRefs, watch } from "vue";
import { Man } from "./App.vue";

const props = defineProps<{
  man: Man;
}>();

const name = toRef(props.man, "name");

/* 监听响应式属性getter 打印props man name Minou */
// watch(
//   () => props.man.name,
//   (p) => {
//     console.log("props man name", p);
//   },
//   {
//     deep: true,
//   }
// );

/* 可直接监听 打印props man name Minou */
watch(
  name,
  (p) => {
    console.log("props man name", p);
  },
  {
    deep: true,
  }
);
</script>

<template></template>

<style scoped></style>

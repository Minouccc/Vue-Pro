<!-- reactive proxy对象 不能直接赋值 会覆盖proxy -->
<script setup lang="ts">
import { reactive, ref } from "vue";

let list = reactive<string[]>([]);
let list1 = reactive<string[]>([]);
let list2 = reactive<{ arr: string[] }>({ arr: [] });

const add = () => {
  let res = ["a", "b", "c"];
  list = res;
  console.log(list); // ["a", "b", "c"] 视图不更新
};
const add1 = () => {
  /** 解决方案1: push + 解构 */
  let res = ["a", "b", "c"];
  list1.push(...res);
};
const add2 = () => {
  /** 解决方案2: reactive定义对象包裹 */
  let res = ["a", "b", "c"];
  list2.arr = res;
};
</script>

<template>
  <ul>
    <li v-for="i in list2.arr">list:{{ i }}</li>
  </ul>
  <button @click="add2">add</button>
</template>

<style scoped></style>

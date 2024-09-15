<!-- reactive 引用数据类型 Array -->
<script setup lang="ts">
import { reactive, ref } from "vue";

const list = reactive<string[]>([]);
const refList = ref<string[]>([]);

const add = () => {
  /** ref / reactive 对 Array push 都能更新 */
  list.push("abc");
  refList.value.push("abc");
};
</script>

<template>
  <ul>
    <li v-for="i in list">list:{{ i }}</li>
  </ul>
  <ul>
    <li v-for="i in refList">refList:{{ i }}</li>
  </ul>
  <button @click="add">add</button>
</template>

<style scoped></style>

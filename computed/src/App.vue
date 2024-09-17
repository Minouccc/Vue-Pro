<script setup lang="ts">
import { computed, ref } from "vue";

const firstname = ref("minou");
const lastname = ref("ccc");

/* 选项式写法 支持一个对象传入get函数以及set函数自定义操作 */
// const fullname = computed<string>({
//   get() {
//     return firstname.value + " " + lastname.value;
//   },
//   set(newVal) {
//     [firstname.value, lastname.value] = newVal.split("-");
//   },
// });
// const change = () => {
//   fullname.value = "MINOU-CCC";
// };

/* 函数式写法 仅支持一个getter函数不允许修改值*/
const fullname = computed<string>(() => {
  return firstname.value + " " + lastname.value;
});
</script>

<template>
  <div>{{ fullname }}</div>
  <button @click="change">change name</button>
</template>

<style scoped></style>

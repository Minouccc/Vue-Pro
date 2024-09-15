<!-- hook 返回 ref 响应式  -->
<script setup lang="ts">
import { isRef, reactive, ref, watch } from "vue";
import Test from "./components/Test.vue";
import { useTest } from "./hooks/useTest";

const { refArr, setArr } = useTest();
const testArr = reactive([1, 2, 3]);

watch(
  () => refArr.value,
  (r) => {
    console.log("watch App2 refArr", r);
  },
  { deep: true } // ref 数组需要深层次监听数组方法
);
console.log(isRef(refArr)); // true

setTimeout(() => {
  testArr.push(4);
}, 2000);
watch(
  () => testArr,
  (t) => {
    console.log("watch App2 testArr", t); // reactive 数组需要深层次监听数组方法
  },
  { deep: true }
);
</script>

<template>
  <ul>
    <li v-for="i in refArr">arr:{{ i }}</li>
  </ul>

  <button @click="setArr">setArr</button>
  <Test :nameArr="refArr" />
</template>

<style scoped></style>

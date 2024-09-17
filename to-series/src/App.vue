<!-- toRef 为源响应式对象上的某个属性新创建一个ref 保持响应式连接-->
<script setup lang="ts">
import { reactive, toRaw, toRef } from "vue";
import Child from "./Child.vue";

export interface Man {
  name: string;
  age: string;
  like: string;
}

const man = reactive<Man>({
  name: "minou",
  age: "18",
  like: "coding",
});

const foo = toRef(man, "age");

const change = () => {
  man.name = "Minou";
  foo.value = "20"; // 修改引用将更新原引用 即 man.age = '20'

  const Man = toRaw(man);
  console.log(man, Man); // 将响应式对象变成普通对象
};
</script>

<template>
  <Child :man />
  <button @click="change">change</button>
</template>

<style scoped></style>

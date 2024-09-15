<!-- ref 深层次响应 shallowRef 浅层次只到value -->
<script setup lang="ts">
import { isRef, Ref, ref, shallowRef, triggerRef } from "vue";

type M = {
  name: string;
};
const Man = ref<M>({ name: "minou" });
const Man1: Ref<M> = shallowRef({ name: "minou" });
const Man2: Ref<M> = shallowRef({ name: "Minou" });

const change = () => {
  Man1.value.name = "minou2";
  console.log(Man1.value, "Man1"); // {"name": "minou2"} 视图不更新

  Man2.value = { name: "Minou2" }; // 会影响Man1的视图更新
};

const change2 = () => {
  Man1.value.name = "minou2";
  console.log(Man1.value, "Man1"); // {"name": "minou2"} 视图不更新

  triggerRef(Man1); // 强制更新收集的依赖
};
</script>

<template>
  <div>shallowRef:{{ Man1 }}</div>
  <div>shallowRef:{{ Man2 }}</div>
  <button @click="change">修改</button>
  <button @click="change2">修改2</button>
</template>

<style scoped></style>

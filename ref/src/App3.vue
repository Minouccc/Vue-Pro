<!-- customRef 适用编写防抖节流-->
<script setup lang="ts">
import { customRef, triggerRef } from "vue";

function myRef<T>(value: T) {
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newVal) {
        value = newVal;
        trigger();
      },
    };
  });
}

type M = {
  name: string;
};

const Man = myRef<M>({ name: "minou" });
const Man1 = myRef<M>({ name: "minou" });

const change = () => {
  Man.value = { name: "Minou" }; // 视图更新

  Man1.value.name = "Minou"; // {name: "Minou"} 视图不更新
  triggerRef(Man1);
};
</script>

<template>
  <div>customRef: {{ Man }}</div>
  <div>customRef: {{ Man1 }}</div>
  <button @click="change">修改</button>
</template>

<style scoped></style>

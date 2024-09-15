<!-- isRef -->
<script setup lang="ts">
import { isRef, Ref, ref } from "vue";

type M = {
  name: string;
};
const Man = ref<M>({ name: "minou" });
const Man1: Ref<M> = ref({ name: "minou" });

const change = () => {
  console.log(isRef(Man1));
};
</script>

<template>
  <div>ref: {{ Man }}</div>
  <button @click="change">修改</button>
</template>

<style scoped></style>

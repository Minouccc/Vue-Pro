<script setup lang="ts">
import { Ref, ref } from "vue";

type M = {
  name: string;
};
const Man = ref<M>({ name: "minou" });
const Man1: Ref<M> = ref({ name: "minou" });

const change = () => {
  Man.value.name = "Minou";
};
</script>

<template>
  <div>{{ Man }}</div>
  <button @click="change">修改</button>
</template>

<style scoped></style>

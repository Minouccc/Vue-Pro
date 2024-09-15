<!-- 作为响应式数组或原生集合类型 (如 Map) 中的元素被访问时，它不会被解包 -->
<script setup lang="ts">
import { reactive, ref } from "vue";

const books = reactive([ref("Vue 3 Guide")]);
// 这里需要 .value
console.log(books[0].value); // Vue 3 Guide

const map = reactive(new Map([["count", ref(0)]]));
// 这里需要 .value
console.log(map.get("count").value); // 0
</script>

<template></template>

<style scoped></style>

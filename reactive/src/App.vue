<!-- reactive<T extends object> 仅支持引用数据类型 Array Object Map Set -->
<script setup lang="ts">
import { reactive } from "vue";

// const form = reactive("123")
let form = reactive({
  name: "minou",
  age: "18",
});

const submit = () => {
  console.log(form);
};
</script>

<template>
  <form>
    <input v-model="form.name" type="text" />
    <br />
    <input v-model="form.age" type="text" />
    <br />
    <button @click.prevent="submit">提交</button>
  </form>
</template>

<style scoped></style>

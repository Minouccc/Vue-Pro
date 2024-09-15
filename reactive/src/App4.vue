<!-- reactive<T extends object> 仅支持引用数据类型 Array Object Map Set -->
<script setup lang="ts">
import { shallowReactive } from "vue";

let form = shallowReactive({
  name: "minou",
  age: "18",
  friend: {
    name: "kobe",
  },
});

const edit = () => {
  // form.friend.name = "curry";
  // console.log(form); // 打印正常 视图不更新

  form.age = "20"; // 视图正常更新 只能响应第一层 且也会被triggerRef影响
};
</script>

<template>
  <div>{{ form }}</div>
  <button @click="edit">edit</button>
</template>

<style scoped></style>

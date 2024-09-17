<!-- toRefs 解构 / 扩展对象 导致响应式丢失解决 -->
<script setup lang="ts">
import { reactive, toRefs, watch } from "vue";

function useCount() {
  const state = reactive({
    count: 0,
  });

  function update(value: number) {
    state.count = value;
  }

  return {
    state: toRefs(state),
    update,
  };
}

const {
  state: { count },
  update,
} = useCount();

watch(
  count,
  (s) => {
    console.log("state", s);
  },
  { deep: true }
);
</script>

<template>
  <div>
    <button @click="update(count - 1)">-1</button>
    {{ count }}
    <button @click="update(count + 1)">+1</button>
  </div>
</template>

<style scoped></style>

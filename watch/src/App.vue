<script setup lang="ts">
import { reactive, ref, watch } from "vue";

const message1 = ref();
const message2 = ref();
const obj1 = ref({
  foo: {
    bar: {
      name: "minou",
    },
  },
});
const obj2 = reactive({
  foo: {
    bar: {
      name: "minou",
    },
  },
});
const obj3 = reactive({
  foo: {
    bar: {
      name: "minou",
      age: "18",
    },
  },
});

/* 监听单个 */
// watch(message1, (newVal, oldVal) => {
//   console.log(newVal, oldVal);
// });

/* 监听多个 */
// watch([message1, message2], (newVal, oldVal) => {
//   console.log(newVal, oldVal);
// });

/* ref 监听对象 需要添加deep: true */
// watch(
//   obj1,
//   (newVal, oldVal) => {
//     console.log(newVal, oldVal); // 此时 newVal 与 oldVal 值一样
//   },
//   {
//     deep: true,
//   }
// );

/* reactive 监听对象 不需要添加 */
// watch(obj2, (newVal, oldVal) => {
//   console.log(newVal, oldVal); // 此时 newVal 与 oldVal 值一样 底层 oldValue === newValue 同一对象引用
// });

/* reactive 监听obj3  更改obj3任意属性都会触发watch */
// watch(obj3, (newVal, oldVal) => {
//   console.log(newVal, oldVal);
// });

/* reactive 监听obj3.foo.bar.name 不是响应式而是字符串 不触发watch 需使用()=>obj3.foo.bar.name */
watch(
  () => obj3.foo.bar.name,
  (newVal, oldVal) => {
    console.log(newVal, oldVal);
  },
  {
    immediate: true, // 初始时执行一次 默认不开启
    flush: "pre", // 默认pre 组件更新之前调用 sync 同步执行 post 组件更新之后执行
  }
);
</script>

<template>
  <div>
    case1: <input v-model="message1" type="text" />
    <hr />
    case2: <input v-model="message2" type="text" />
    <hr />
    case3: <input v-model="obj1.foo.bar.name" type="text" />
    <hr />
    case4: <input v-model="obj2.foo.bar.name" type="text" />
    <hr />
    <div>
      case5:
      <br />
      name:<input v-model="obj3.foo.bar.name" type="text" />
      <br />
      age:<input v-model="obj3.foo.bar.age" type="text" />
    </div>
  </div>
</template>

<style scoped></style>

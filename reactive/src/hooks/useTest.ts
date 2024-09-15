import { reactive, ref } from "vue";

export const useTest = () => {
  let refArr = ref<string[]>([]); // 可保持响应式

  // let refArr = reactive<string[]>([]); // 可保持响应式
  // let refArr = reactive<{ arr: string[] }>({ arr: [] }); // 可保持响应式

  const setArr = () => {
    refArr.value.push("useTest");
    // refArr.value = [...refArr.value]; // 直接赋值watch不需要添加 deep:true
  };

  return { refArr, setArr };
  // return [refArr, setArr];
};

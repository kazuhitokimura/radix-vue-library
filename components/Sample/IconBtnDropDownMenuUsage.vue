<!-- IconBtnDropDownMenuを使用するテスト -->

<template>
  <IconBtnDropDownMenu size="L" :items="dropdownItems" @click="handleClick" />
</template>

<script setup>
import IconBtnDropDownMenu from "../IconBtnDropDownMenu.vue";

import { ref } from "vue";

const dropdownItems = ref([
  { id: "1", label: "テスト1", color: "default" },
  { id: "2", label: "テスト2", color: "default" },
  { id: "3", label: "テスト3", color: "destructive" },
]);

const handleClick = (item) => {
  switch (item.id) {
    case "1":
      handleTest1();
      break;
    case "2":
      handleTest2();
      break;
    case "3":
      handleTest3();
      break;
  }
};

const handleTest1 = () => {
  alert("テスト1の機能を実行");
};

const handleTest2 = () => {
  alert("テスト2の機能を実行");
};

const handleTest3 = () => {
  alert("テスト3の機能を実行");
};
</script>

<style lang="scss" module></style>

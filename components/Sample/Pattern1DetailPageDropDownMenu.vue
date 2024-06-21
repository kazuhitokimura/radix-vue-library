<!-- Radix Vueを使用 -->
<template>
  <IconBtnDropDownMenu size="M" :items="dropdownItems" @click="handleClick" />
</template>

<script setup>
import IconBtnDropDownMenu from "../IconBtnDropDownMenu.vue";

import { ref } from "vue";

import { useRouter } from "vue-router";

const router = useRouter();

const dropdownItems = ref([
  { id: "1", label: "編集", color: "default" },
  { id: "2", label: "削除", color: "destructive" },
]);

const handleClick = (item) => {
  switch (item.id) {
    case "1":
      editPattern1();
      break;
    case "2":
      deletePattern1();
      break;
  }
};

const editPattern1 = () => {
  router.push("/edit");
};

const deletePattern1 = () => {
  alert("削除します。よろしいですか？");
};
</script>

<style lang="scss" module></style>

<!-- Radix Vueを使用 -->
<template>
  <IconBtnDropDownMenu size="M" :items="dropdownItems" @click="handleClick" />
</template>

<!--
<template>
  <DropdownMenu>
    <template #dropDownTrigger>
      <IconBtn icon="more_horiz" color="neutral" size="L" />
    </template>
    <template #dropDownContent>
      <DropdownMenuItem :class="$style.dropDownItem"
        ><NuxtLink :class="$style.nuxtLink" to="/edit">編集</NuxtLink></DropdownMenuItem
      >
      <MessageDialog>
        <template #dialogTrigger>
          <span :class="[$style.dropDownItem, $style.destructive]">削除 </span>
        </template>
        <template #dialogTitle> 削除します。よろしいですか？ </template>
        <template #dialogDescription
          ><p>
            （要修正）トリガーをRadixのドロップダウンに入れると、ダイアログ自体をクリックしたら閉じてしまう。
          </p></template
        >
        <template #dialogAction><Btn label="削除" color="high-destructive" /></template>
      </MessageDialog>
    </template>
  </DropdownMenu>
</template>
-->

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

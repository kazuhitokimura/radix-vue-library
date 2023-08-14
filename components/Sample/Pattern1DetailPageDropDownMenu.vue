<!-- Radix Vueを使用 -->

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

<script setup lang="ts">
import { DropdownMenuItem } from "radix-vue";
</script>

<style lang="scss" module>
.dropDownItem {
  @include dropdown-menu-item-base();
}

.nuxtLink {
  width: 100%;
  height: 100%;
}

.destructive {
  color: $error-main;
}
</style>

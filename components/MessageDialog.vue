<!-- Radix Vueを使用 -->
<!-- Triggerをslotにしてみる -->

<template>
  <DialogRoot>
    <DialogTrigger :class="$style.dialogTrigger"
      ><slot name="dialogTrigger"
    /></DialogTrigger>
    <DialogPortal>
      <DialogOverlay :class="$style.dialogOverlay" />
      <DialogContent :class="$style.dialogContent">
        <DialogTitle
          ><h2><slot name="dialogTitle" /></h2
        ></DialogTitle>
        <DialogDescription :class="$style.dialogDescription"
          ><slot name="dialogDescription"
        /></DialogDescription>
        <div :class="$style.dialogAction">
          <DialogClose :class="$style.dialogClose"
            ><Btn :label="closeLabel" color="text"
          /></DialogClose>
          <slot name="dialogAction" />
        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<script setup>
/* 一応すべてインポートしておく */
import {
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogOverlay,
  DialogClose,
  DialogPortal,
  DialogTitle,
  DialogDescription,
} from "radix-vue";

const props = defineProps({
  triggerText: {
    type: String,
    default: "ダイアログを開く",
  },
  closeLabel: {
    type: String,
    default: "キャンセル",
  },
  isBtn: {
    type: Boolean,
    default: true,
  },
  isDropdown: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" module>
.dialogOverlay {
  position: fixed;
  inset: 0;
  background-color: $overlay-modal;
  z-index: $z-index-30;
}

.dialogTrigger {
  width: fit-content;
  height: fit-content;

  /*フォーカス時のスタイルがslotと2重で当たらないようにする*/
  &:focus {
    outline: none;
  }
}

.dialogContent {
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 30rem;
  max-height: 80vh;
  padding: 1rem;
  background-color: $surface-main;
  border-radius: $radius-M;
  box-shadow: $shadow-40;
  z-index: $z-index-40;
}

.dialogTitle {
  width: 100%;
}

.dialogDescription {
  width: 100%;
  color: $text-sub;
}

.dialogAction {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
}

.dialogClose {
  /*フォーカス時のスタイルがslotと2重で当たらないようにする*/
  &:focus {
    outline: none;
  }
}
</style>

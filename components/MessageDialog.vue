<!-- Radix Vueを使用 -->
<!-- Triggerをslotにしてみる -->

<template>
  <DialogRoot>
    <DialogTrigger :class="$style.dialogTrigger"
      ><slot name="dialogTrigger"
    /></DialogTrigger>
    <DialogPortal>
      <Transition name="up">
        <DialogOverlay :class="$style.dialogOverlay" />
      </Transition>
      <Transition name="up">
        <DialogContent :class="$style.dialogContent">
          <DialogTitle
            ><h2><slot name="dialogTitle" /></h2
          ></DialogTitle>
          <DialogDescription :class="$style.dialogDescription"
            ><slot name="dialogDescription"
          /></DialogDescription>
          <div :class="$style.dialogAction">
            <DialogClose :class="$style.dialogClose"
              ><Btn :label="closeLabel" color="neutral"
            /></DialogClose>
            <slot name="dialogAction" />
          </div>
        </DialogContent>
      </Transition>
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
  transform: translate(-50%, -50%); /*ダイアログを左右中央寄せに*/
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  max-width: 25rem;
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

/*アニメーション、動いていない*/
.up-enter-active,
.up-leave-active {
  transition: opacity 0.3s ease;
  transform: translateY(0);
}

.up-enter-from,
.up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>

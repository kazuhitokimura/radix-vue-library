<!--　Radix Vueで作成　-->

<template>
  <DialogRoot>
    <DialogTrigger> Edit profile </DialogTrigger>
    <DialogPortal>
      <DialogOverlay :class="$style.dialogOverlay" />
      <DialogContent :class="$style.dialogContent">
        <div :class="$style.dialogHeader">
          <DialogTitle> 登録 </DialogTitle>
          <DialogClose :class="$style.dialogClose" aria-label="Close">
            <Icon icon="lucide:x" />
          </DialogClose>
        </div>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
        <fieldset>
          <label for="name"> Name </label>
          <input id="name" defaultValue="Pedro Duarte" />
        </fieldset>
        <fieldset>
          <label for="username"> Username </label>
          <input id="username" defaultValue="@peduarte" />
        </fieldset>
        <div :style="{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }">
          <DialogClose as-child>
            <button>Save changes</button>
          </DialogClose>
        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<script setup>
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "radix-vue";
import { Icon } from "@iconify/vue";
</script>

<style lang="scss" module>
.dialogOverlay {
  position: fixed;
  inset: 0;
  background-color: $overlay-modal;
  z-index: $z-index-30;
  animation: overlayShow 0.2s ease-out; /*overlayShowのアニメーション付与*/
}

.dialogTrigger {
  width: fit-content;
  height: fit-content;
}

.dialogHeader {
  display: flex;
  padding: 16px 24px;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid $border-divider;
  background: $surface-main;
}

.dialogClose {
  @include icon-btn-base();
  @include icon-btn-size-M();
  @include text-icon-btn-base();
}

.dialogContent {
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 25rem;
  max-height: 80vh;
  gap: 1.25rem;
  background-color: $surface-main;
  border-radius: $radius-M;
  box-shadow: $shadow-40;
  z-index: $z-index-40;
  animation: contentShow 0.2s ease-out; /*contentShowのアニメーション付与*/
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

/* overlayShowアニメーションの定義 */
@keyframes overlayShow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* contentShowアニメーションの定義 */
@keyframes contentShow {
  from {
    transform: translate(-50%, -50%) translateY(20px);
  }
  to {
    transform: translate(-50%, -50%);
  }
}
</style>

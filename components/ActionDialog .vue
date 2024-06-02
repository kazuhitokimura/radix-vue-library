<template>
  <button :class="$style.dialogTrigger" @click="toggleDialog">
    <slot name="dialogTrigger" />
  </button>
  <div :class="[$style.dialogOverlay, { [$style.open]: dialogIsOpen }]"></div>
  <DialogContent
    :class="[$style.dialogContent, $style[size], { [$style.open]: dialogIsOpen }]"
  >
    <div :class="$style.dialogHeader">
      <div :class="$style.dialogHeaderContents" :style="{ width: contentWidth }">
        <LoadingSpinner v-if="isLoading" />
        <h2 :class="$style.contentTitle">
          {{ contentTitle }}
        </h2>
        <IconBtn
          icon="close"
          ariaLabel="閉じる"
          color="text"
          size="L"
          @click="toggleDialog"
        />
      </div>
    </div>
    <div :class="$style.dialogBody" :style="{ width: contentWidth }">
      <slot name="dialogBody"></slot>
    </div>
    <div :class="$style.dialogFooter">
      <slot name="dialogFooter"></slot>
    </div>
  </DialogContent>
</template>

<script setup>
const dialogIsOpen = ref(false);

const toggleDialog = () => {
  dialogIsOpen.value = !dialogIsOpen.value;
};

const props = defineProps({
  contentTitle: {
    type: String,
    default: "タイトル",
  },
  size: {
    type: String,
    default: "M",
  },
  /* ダイアログヘッダーと、ダイアログボディーのコンテンツ幅 */
  contentWidth: {
    type: String,
    default: "100%",
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" module>
.dialogTrigger {
  width: fit-content;
  height: fit-content;

  /*フォーカス時のスタイルがslotと2重で当たらないようにする*/
  &:focus {
    outline: none;
  }
}

.dialogOverlay {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: $z-index-30;
  background-color: $overlay-modal;
  visibility: hidden;

  /*dialogIsOpenがtrueになったら付与する*/
  &.open {
    visibility: visible;
  }
}

.dialogHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.5rem;
  width: 100%;
  border-bottom: 1px solid $border-divider;
}

.dialogHeaderContents {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
}

.contentTitle {
  flex: 1;
}

.dialogContent {
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%) translateY(20px); /*要素を20pxだけ下に移動させた状態にしておく*/
  z-index: $z-index-40;
  box-shadow: $shadow-40;

  opacity: 0;
  transition: transform 120ms ease-in;
  pointer-events: none;

  /*dialogIsOpenがtrueになったら付与する*/
  &.open {
    visibility: visible;
    transform: translate(-50%, -50%) translateY(0);
    opacity: 1;
    pointer-events: auto;
  }
}

.dialogBody {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem;
  flex: 1;
  overflow-y: scroll;
}

.dialogFooter {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  width: 100%;
  z-index: $z-index-30;
  border-top: 1px solid $border-divider;
}

/* size別のスタイル */
.M {
  max-width: 50rem;
  border-radius: $radius-M;
}

.fullScreen {
  min-height: 100vh;
  min-width: 100vw;
}
</style>

<template>
  <div :class="$style.drawerTrigger" @click="toggleDrawer">
    <slot name="drawerTrigger" />
  </div>
  <DrawerContent
    :class="[$style.drawerContent, { [$style.open]: drawerIsOpen }]"
    :style="{ width: contentWidth }"
  >
    <div :class="$style.drawerHeader">
      <LoadingSpinner v-if="isLoading" />
      <h2 :class="$style.contentTitle">{{ contentTitle }}</h2>
      <IconBtn
        icon="close"
        ariaLabel="閉じる"
        color="text"
        size="M"
        @click="toggleDrawer"
      />
    </div>
    <div :class="$style.drawerBody">
      <slot name="drawerBody"></slot>
    </div>
    <div :class="$style.drawerFooter">
      <slot name="drawerFooter"></slot>
    </div>
  </DrawerContent>
</template>

<script setup>
const drawerIsOpen = ref(false);

const toggleDrawer = () => {
  drawerIsOpen.value = !drawerIsOpen.value;
};

const props = defineProps({
  contentTitle: {
    type: String,
    default: "タイトル",
  },
  contentWidth: {
    type: String,
    default: "25rem",
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" module>
.drawerTrigger {
  width: fit-content;
  height: fit-content;

  /*フォーカス時のスタイルがslotと2重で当たらないようにする*/
  &:focus {
    outline: none;
  }
}
.drawerHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  gap: 8px;
  width: 100%;
  border-bottom: 1px solid $border-divider;
}

.contentTitle {
  flex: 1;
}

.drawerContent {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  max-height: 100vh;
  background-color: $surface-main;
  z-index: $z-index-20;
  box-shadow: $shadow-20;

  /*要素をその幅の100%分だけ右に移動させた状態にしておく*/
  transform: translateX(100%);

  transition: transform 120ms ease-in;
  visibility: hidden;
  pointer-events: none;

  /*drawerIsOpenがtrueになったら付与する*/
  &.open {
    width: fit-content;
    transform: translateX(0);
    visibility: visible;
    pointer-events: auto;
  }
}

.drawerBody {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem;
  flex: 1;
  overflow-y: scroll;
}

.drawerFooter {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  width: 100%;
  z-index: $z-index-30;
  border-top: 1px solid $border-divider;
}
</style>

<!-- td、内容の種類によって別のコンポーネントに　-->

<template>
  <td :class="[$style.td]" :style="{ width: width }">
    <div :class="$style.imgBackground" :style="{ width: imgWidth, height: imgHeight }">
      <img
        v-if="empty"
        :class="$style.tdImg"
        src="../public/empty-image.svg"
        :alt="alt"
        :style="{ width: imgWidth, height: imgHeight }"
      />
      <img
        v-else
        :class="$style.tdImg"
        :src="src"
        :alt="alt"
        :style="{ width: imgWidth, height: imgHeight }"
      />
    </div>
  </td>
</template>

<script setup>
const props = defineProps({
  width: {
    type: String,
    default: "5.25rem",
  },
  imgWidth: {
    type: String,
    default: "3.75rem",
  },
  imgHeight: {
    type: String,
    default: "2.5rem",
  },
  src: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "サムネイル画像",
  },
  empty: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" module>
.td {
  padding: 1rem 0.75rem;
  text-align: left;
  border-bottom: 1px solid $border-main;
}

.tdImg {
  background-color: $gray-200;
  object-fit: cover;
  @include text-body2();
}
</style>

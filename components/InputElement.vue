<template>
  <div :class="$style.InputElement" :style="{ width: width }">
    <div :class="$style.inputLabel">
      <label :for="labelFor">{{ label }}</label
      ><span v-if="mandatory" :class="$style.mandatoryIcon">*</span>
    </div>
    <slot />
    <span v-if="errorMessage" :class="$style.errorMessage">{{ errorMessage }}</span>
    <span v-if="hint" :class="$style.hint">{{ hint }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "ラベル",
  },
  labelFor: {
    type: String,
    default: "",
  },
  mandatory: {
    type: Boolean,
    default: false,
  },
  errorMessage: {
    type: String,
    default: "",
  },
  hint: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "100%",
  },
});
</script>

<style lang="scss" module>
.InputElement {
  display: flex;
  flex-direction: column;
}
.inputLabel {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.5rem;
  @include text-h5();
  color: $text-sub;
}

.mandatoryIcon {
  color: $error-main;
}

.hint {
  margin-top: 0.5rem;
  @include text-body2();
  color: $text-sub;
}

.errorMessage {
  margin-top: 0.5rem;
  @include text-body2();
  color: $error-main;
}
</style>

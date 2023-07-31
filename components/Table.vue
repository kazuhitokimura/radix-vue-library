<template>
  <table :class="$style.table">
    <thead>
      <tr>
        <slot name="tableHeader"></slot>
      </tr>
    </thead>

    <tbody>
      <slot name="tableData"></slot>
    </tbody>
  </table>
</template>

<style lang="scss" module>
.table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}
</style>

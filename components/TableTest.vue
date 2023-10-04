<!-- tr、th、tdをfor文で表示させるテスト -->

<template>
  <table>
    <thead>
      <tr>
        <component
          v-for="(header, index) in headers"
          :key="index"
          :is="header.component"
          v-bind="header.props"
        />
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in rows" :key="row.id">
        <td v-for="(cell, index) in row.cells" :key="index">
          <component :is="cell.component" v-bind="cell.props"></component>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  headers: {
    type: Array,
    default: () => [{ component: "Th" }, { props: { header: "header" } }],
  },
  rows: {
    type: Array,
    default: () => [{ component: "TdText" }, { props: { text: "text" } }],
  },
});
</script>

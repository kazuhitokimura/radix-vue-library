<template>
  <table>
    <thead>
      <tr>
        <Th v-for="header in headers" :key="header" />
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
    default: () => [],
  },
  rows: {
    type: Array,
    default: () => [],
  },
});
</script>

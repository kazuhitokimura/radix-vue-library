<template>
  <TableTest
    :headers="['タイトル', '項目', '', '項目']"
    :rows="[
      {
        id: 1,
        cells: [
          { component: 'TdText', props: { text: 'タイトル' } },
          { component: 'TdText', props: { text: 'テキスト' } },
          { component: 'TdBtn', props: { label: 'クリック', action: someAction } },
          { component: 'TdText', props: { text: 'テキスト' } },
        ],
      },
      // 他の行...
    ]"
  />
</template>

<script setup></script>

<style lang="scss" module></style>

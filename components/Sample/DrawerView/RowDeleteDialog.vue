<template>
  <MessageDialog>
    <template #dialogTrigger>
      <Btn label="削除" color="destructive" size="M" />
    </template>
    <template #dialogTitle>削除します。よろしいですか？</template>
    <template #dialogDescription> 削除すると取り消すことができません。 </template>
    <template #dialogAction>
      <Btn label="削除" color="high-destructive" />
    </template>
  </MessageDialog>
</template>

<script setup>
import MessageDialog from "../../MessageDialog.vue";
import Btn from "../../Btn.vue";
</script>

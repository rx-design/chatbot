<template>
  <Button
    rounded
    @click="openChat"
  >
    <Icon
      name="tabler:message-chatbot"
      size="2.5rem"
      mode="svg"
    />
  </Button>
</template>

<script setup lang="ts">
import { ChatModal } from '#components'

const dialog = useDialog()

function openChat() {
  dialog.open(ChatModal, {
    props: {
      header: 'Chat',
      style: {
        width: '50vw',
      },
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw',
      },
      modal: true,
    },
  })
}
</script>
